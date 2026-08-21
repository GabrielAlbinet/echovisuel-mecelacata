import { Component, input, output } from '@angular/core';
import { Participant } from '../../types/participant.interface';

@Component({
  imports: [],
  selector: 'app-participant-card',
  styleUrl: './participant-card.component.css',
  templateUrl: './participant-card.component.html',
})
export class ParticipantCardComponent {
  participant = input.required<Participant>();
  selected = output<{participant: Participant, isChecked:boolean}>();

  onChange(isChecked:boolean){
    this.selected.emit({participant:this.participant(), isChecked:isChecked});
  }

}
