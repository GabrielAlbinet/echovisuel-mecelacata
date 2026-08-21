import { Component, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ParticipantService } from '../../services/participant.service';

@Component({
  imports: [FormsModule],
  selector: 'app-participant-search',
  styleUrl: './participant-search.component.css',
  templateUrl: './participant-search.component.html',
})
export class ParticipantSearchComponent {
  private readonly participantService = inject(ParticipantService);
  
  emailSearch = signal<string>('');


  getParticipantsByMail(emailSearch:string){
    let regex = new RegExp(".*" + emailSearch + ".*");
    this.participantService.setParticipantTab(regex);
  }
}
