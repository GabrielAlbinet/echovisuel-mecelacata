import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-participant-search',
  styleUrl: './participant-search.component.css',
  templateUrl: './participant-search.component.html',
})
export class ParticipantSearchComponent {
  emailSearch = signal<string>('');


  getParticipantsByMail(event:Event){
    
  }
}
