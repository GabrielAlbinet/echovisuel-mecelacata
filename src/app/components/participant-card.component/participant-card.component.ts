import { Component, computed, input, output } from '@angular/core';
import { Participant } from '../../types/participant.interface';

@Component({
  imports: [],
  selector: 'app-participant-card',
  styleUrl: './participant-card.component.css',
  templateUrl: './participant-card.component.html',
})
export class ParticipantCardComponent {
  participant = input.required<Participant>();
  selected = output<{ participant: Participant; isChecked: boolean }>();
  edit = output<Participant>();
  remove = output<Participant>();

  ticketName = computed(() => this.participant().ticket?.name ?? `Billet #${this.participant().ticketId}`);

  onChange(isChecked: boolean) {
    this.selected.emit({ participant: this.participant(), isChecked });
  }
}