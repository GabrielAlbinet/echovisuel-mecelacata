import { Component, inject, OnInit } from '@angular/core';
import { Ticket } from '../../types/ticket-type.interface';
import { TicketService } from '../../services/ticket.service';
import { TicketCardComponent } from '../../components/ticket-card.component/ticket-card.component';


@Component({
  imports: [TicketCardComponent],
  selector: 'app-ticket-list.component',
  styleUrl: './ticket-list.component.css',
  templateUrl: './ticket-list.component.html',
})
export class TicketListComponent implements OnInit {
  private readonly ticketServiceCall = inject(TicketService);
  readonly ticketList = this.ticketServiceCall.ticketListSignal; //Creation d'un signal d'une liste de ticket
  selectedTicketList:Ticket[] = [];
  ngOnInit(){
    this.ticketServiceCall.getTicketList();
  }
 selectedTicket(ticket:Ticket){
  this.selectedTicketList.push(ticket);
 }
}
