import { Component, OnDestroy, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ParticipantService } from '../../services/participant.service';

@Component({
  imports: [FormsModule],
  selector: 'app-participant-search',
  styleUrl: './participant-search.component.css',
  templateUrl: './participant-search.component.html',
})
export class ParticipantSearchComponent implements OnDestroy {
  private readonly participantService = inject(ParticipantService);
  private searchTimeout: ReturnType<typeof setTimeout> | null = null;

  emailSearch = signal<string>('');

  onSearchChange(value: string) {
    this.emailSearch.set(value);

    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }

    this.searchTimeout = setTimeout(() => {
      this.participantService.getParticipants(value.trim()).subscribe();
    }, 300);
  }

  ngOnDestroy() {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
  }
}