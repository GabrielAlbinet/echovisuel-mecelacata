import { Component, input } from '@angular/core';
import { Ticket } from '../../types/ticket-type.interface';

@Component({
  imports: [],
  selector: 'app-ticket-card',
  styleUrl: './ticket-card.component.css',
  templateUrl: './ticket-card.component.html',
})
export class TicketCardComponent {
  ticket=input.required<Ticket>();
}
