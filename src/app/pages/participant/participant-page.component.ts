import { Component, OnInit, inject } from '@angular/core';
import { ParticipantService } from '../../services/participant.service';
import { ParticipantListComponent } from '../../components/participant-list.component/participant-list.component';
import { ParticipantSearchComponent } from '../../components/participant-search.component/participant-search.component';

@Component({
  imports: [ParticipantSearchComponent,ParticipantListComponent],
  selector: 'app-participant-page',
  styleUrl: './participant-page.component.css',
  templateUrl: './participant-page.component.html',
})
export class ParticipantPageComponent implements OnInit {
    private readonly participantService = inject(ParticipantService);
    readonly participantTab = this.participantService.participantsSignal;

    ngOnInit(){
      this.participantService.getParticipants().subscribe();
    }
}
