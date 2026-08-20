import { Component, inject, OnInit } from '@angular/core';
import { ParticipantService } from '../../services/participant.service';
import { ParticipantCardComponent } from '../participant-card.component/participant-card.component';

@Component({
  imports: [ParticipantCardComponent],
  selector: 'app-participant-list',
  styleUrl: './participant-list.component.css',
  templateUrl: './participant-list.component.html',
})
export class ParticipantListComponent implements OnInit {
    private readonly participantService = inject(ParticipantService);
    readonly participantTab = this.participantService.participantsSignal;

  ngOnInit(){
    this.participantService.getParticipants().subscribe();
    console.log(this.participantTab);
  }

}
