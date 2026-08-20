import { Component, input } from '@angular/core';
import { Participant } from '../../types/participant.interface';

@Component({
  imports: [],
  selector: 'app-participant-card',
  styleUrl: './participant-card.component.css',
  templateUrl: './participant-card.component.html',
})
export class ParticipantCardComponent {
  participant = input.required<Participant>();
}
