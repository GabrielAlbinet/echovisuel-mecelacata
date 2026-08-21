import { Component } from '@angular/core';
import { ParticipantListComponent } from '../../components/participant-list.component/participant-list.component'

@Component({
  imports: [ParticipantListComponent],
  selector: 'app-participant-page',
  styleUrl: './participant-page.component.css',
  templateUrl: './participant-page.component.html',
})
export class ParticipantPageComponent {}
