import { Component, inject, input, output } from '@angular/core';
import { Ticket } from '../../types/ticket-type.interface';
import { TicketService } from '../../services/ticket.service';

@Component({
  imports: [],
  selector: 'app-ticket-card',
  styleUrl: './ticket-card.component.css',
  templateUrl: './ticket-card.component.html',
})
export class TicketCardComponent {
  private ticketService = inject(TicketService);

  ticket = input.required<Ticket & { id: number }>();
  selectedTicket = output<Ticket>();

  select(ticket: Ticket) {
    this.selectedTicket.emit(ticket);
  }

  onEdit() {
    this.ticketService.ticketIdBeingEdited.set(this.ticket().id);
  }

  onDelete() {
    this.ticketService.deleteTicket(this.ticket().id);
  }
}