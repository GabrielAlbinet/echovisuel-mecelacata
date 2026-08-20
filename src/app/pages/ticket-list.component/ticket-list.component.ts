import { Component, inject } from '@angular/core';
import { Ticket } from '../../types/ticket-type.interface';
import { TicketService } from '../../services/ticket.service';
import { TicketCardComponent } from '../../components/ticket-card.component/ticket-card.component';

@Component({
  imports: [TicketCardComponent],
  selector: 'app-ticket-list.component',
  styleUrl: './ticket-list.component.css',
  templateUrl: './ticket-list.component.html',
})
export class TicketListComponent {
  private readonly ticketService = inject(TicketService);
  readonly ticketList = this.ticketService.ticketListSignal; //Creation d'un signal d'une liste de ticket
  
  ngOnInit(){
    this.ticketService.getTicketList();
  }
}
