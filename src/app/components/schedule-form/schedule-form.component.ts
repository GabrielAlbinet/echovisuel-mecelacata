import { Component, OnInit, inject, signal, input, output, effect } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ArtistService } from '../../services/artist.service';
import { VenueServiceTs } from '../../services/venue-service/venue.service';
import { ScheduleService } from '../../services/schedule.service';
import { FestivalEvent } from '../../types/festival-event.interface';

interface PendingEvent {
  artistName: string;
  date: string;
  time: string;
}

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
})
export class ScheduleFormComponent implements OnInit {
  private readonly artistService = inject(ArtistService);
  private readonly venueService = inject(VenueServiceTs);
  private readonly scheduleService = inject(ScheduleService);

  eventToEdit = input<FestivalEvent | null>(null);
  eventCreated = output<FestivalEvent>();
  eventUpdated = output<FestivalEvent>();
  eventEditCancelled = output<void>();

  readonly artists = this.artistService.artists;
  readonly venues = this.venueService.venues;

  showTimeErrorModal = signal(false);
  showConfirmModal = signal(false);
  showInvalidFormMessage = signal(false);
  pendingEvent = signal<PendingEvent | null>(null);
  apiErrorMessage = signal<string | null>(null);

  form = new FormGroup({
    artistId: new FormControl<number | null>(null, Validators.required),
    venueId: new FormControl<number | null>(null, Validators.required),
    date: new FormControl('', Validators.required),
    startTime: new FormControl('', Validators.required),
    endTime: new FormControl('', Validators.required),
  });

  constructor() {
    effect(() => {
      const event = this.eventToEdit();
      const artists = this.artists();
      const venues = this.venues();

      if (!event) {
        this.form.reset();
        return;
      }

      if (artists.length === 0 || venues.length === 0) {
        return;
      }

      this.form.patchValue({
        artistId: event.artistId,
        venueId: event.venueId,
        date: event.date,
        startTime: event.startTime,
        endTime: event.endTime,
      });
    });
  }

  ngOnInit() {
    this.venueService.initVenue();
  }

  submit() {
    const { artistId, date, startTime, endTime } = this.form.value;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.showInvalidFormMessage.set(true);
      return;
    }

    this.showInvalidFormMessage.set(false);

    if (!startTime || !endTime || endTime <= startTime) {
      this.showTimeErrorModal.set(true);
      return;
    }

    const artistName = this.artists().find((artist) => artist.id === artistId)?.name ?? 'Artiste inconnu';
    const formattedDate = new Date(date!).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' });

    this.pendingEvent.set({ artistName, date: formattedDate, time: startTime });
    this.showConfirmModal.set(true);
  }

  closeTimeErrorModal() {
    this.showTimeErrorModal.set(false);
  }

  closeApiErrorModal() {
    this.apiErrorMessage.set(null);
  }

  confirmSubmit() {
    const { artistId, venueId, date, startTime, endTime } = this.form.value;
    const editingEvent = this.eventToEdit();
    const payload = {
      artistId: artistId!,
      venueId: venueId!,
      date: date!,
      startTime: startTime!,
      endTime: endTime!,
    };

    this.showConfirmModal.set(false);

    const request$ = editingEvent
      ? this.scheduleService.updateEvent(editingEvent.id, payload)
      : this.scheduleService.createEvent({ ...payload, status: 'scheduled' });

    request$.subscribe({
      next: (event) => {
        if (editingEvent) {
          this.eventUpdated.emit(event);
        } else {
          this.eventCreated.emit(event);
        }
        this.form.reset();
        this.showInvalidFormMessage.set(false);
      },
      error: (error: HttpErrorResponse) => {
        this.apiErrorMessage.set(error.error?.message ?? "L'enregistrement a échoué, réessayez.");
      },
    });
  }

  cancelSubmit() {
    this.showConfirmModal.set(false);
  }

  cancelEdit() {
    this.form.reset();
    this.showInvalidFormMessage.set(false);
    this.eventEditCancelled.emit();
  }
}