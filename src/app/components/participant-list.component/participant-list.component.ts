import { Component, inject, OnInit } from '@angular/core';
import { ParticipantService } from '../../services/participant.service';

@Component({
  imports: [],
  selector: 'app-participant-list',
  styleUrl: './participant-list.component.css',
  templateUrl: './participant-list.component.html',
})
export class ParticipantListComponent implements OnInit {
  participantService = inject(ParticipantService);

  ngOnInit(){
    this.participantService.getParticipants().subscribe();
  }

}
