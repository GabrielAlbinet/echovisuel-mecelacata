import { Component, inject, signal } from '@angular/core';
import { ParticipantListComponent } from '../../components/participant-list.component/participant-list.component';
import { ParticipantSearchComponent } from '../../components/participant-search.component/participant-search.component';
import { ParticipantFormComponent } from '../../components/participant-form/participant-form.component';
import { ParticipantService } from '../../services/participant.service';
import { Participant } from '../../types/participant.interface';

@Component({
  imports: [ParticipantSearchComponent, ParticipantListComponent, ParticipantFormComponent],
  selector: 'app-participant-page',
  styleUrl: './participant-page.component.css',
  templateUrl: './participant-page.component.html',
})
export class ParticipantPageComponent {
  private readonly participantService = inject(ParticipantService);

  participantToEdit = signal<Participant | null>(null);
  participantToDelete = signal<Participant | null>(null);

  onEditRequested(participant: Participant) {
    this.participantToEdit.set(participant);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onParticipantSaved() {
    this.participantToEdit.set(null);
  }

  onEditCancelled() {
    this.participantToEdit.set(null);
  }

  onRemoveRequested(participant: Participant) {
    this.participantToDelete.set(participant);
  }

  cancelRemove() {
    this.participantToDelete.set(null);
  }

  confirmRemove() {
    const participant = this.participantToDelete();
    if (!participant) return;

    this.participantService.deleteParticipant(participant.id).subscribe({
      next: () => {
        if (this.participantToEdit()?.id === participant.id) {
          this.participantToEdit.set(null);
        }
        this.participantToDelete.set(null);
      },
      error: () => this.participantToDelete.set(null),
    });
  }
}