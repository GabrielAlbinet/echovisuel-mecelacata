import { Component, OnInit, effect, inject, input, output, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ParticipantService } from '../../services/participant.service';
import { TicketService } from '../../services/ticket.service';
import { Participant } from '../../types/participant.interface';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-participant-form',
  templateUrl: './participant-form.component.html',
})
export class ParticipantFormComponent implements OnInit {
  private readonly participantService = inject(ParticipantService);
  private readonly ticketService = inject(TicketService);

  participantToEdit = input<Participant | null>(null);
  participantSaved = output<Participant>();
  editCancelled = output<void>();

  readonly tickets = this.ticketService.ticketListSignal;
  readonly statuses = ['spectateur', 'spectatrice', 'musicien'];

  showInvalidFormMessage = signal(false);
  apiErrorMessage = signal<string | null>(null);

  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    status: new FormControl('', Validators.required),
    ticketId: new FormControl<number | null>(null, Validators.required),
  });

  constructor() {
    effect(() => {
      const participant = this.participantToEdit();
      const tickets = this.tickets();

      if (!participant) {
        this.form.reset();
        return;
      }

      if (tickets.length === 0) {
        return;
      }

      this.form.patchValue({
        firstName: participant.firstName,
        lastName: participant.lastName,
        email: participant.email,
        status: participant.status,
        ticketId: participant.ticketId,
      });
    });
  }

  ngOnInit() {
    this.ticketService.getTicketList();
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.showInvalidFormMessage.set(true);
      return;
    }

    this.showInvalidFormMessage.set(false);
    this.apiErrorMessage.set(null);

    const { firstName, lastName, email, status, ticketId } = this.form.value;
    const payload = {
      firstName: firstName!,
      lastName: lastName!,
      email: email!,
      status: status!,
      ticketId: ticketId!,
    };

    const editingParticipant = this.participantToEdit();
    const request$ = editingParticipant
      ? this.participantService.updateParticipant(editingParticipant.id, payload)
      : this.participantService.createParticipant(payload);

    request$.subscribe({
      next: (participant) => {
        this.form.reset();
        this.participantSaved.emit(participant);
      },
      error: (error: HttpErrorResponse) => {
        this.apiErrorMessage.set(error.error?.message ?? "L'enregistrement a échoué, réessayez.");
      },
    });
  }

  cancelEdit() {
    this.form.reset();
    this.showInvalidFormMessage.set(false);
    this.apiErrorMessage.set(null);
    this.editCancelled.emit();
  }
}