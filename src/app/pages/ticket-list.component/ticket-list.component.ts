import { Component, inject, OnInit } from '@angular/core';
import { Ticket } from '../../types/ticket-type.interface';
import { TicketService } from '../../services/ticket.service';
import { TicketCardComponent } from '../../components/ticket-card.component/ticket-card.component';
import { CreateTicketComponent } from '../../components/create-ticket.component/create-ticket.component';

@Component({
  imports: [TicketCardComponent,CreateTicketComponent],
  selector: 'app-ticket-list.component',
  styleUrl: './ticket-list.component.css',
  templateUrl: './ticket-list.component.html',
})
export class TicketListComponent implements OnInit {
  private readonly ticketServiceCall = inject(TicketService);
  readonly ticketList = this.ticketServiceCall.ticketListSignal; //Creation d'un signal d'une liste de ticket
  selectedTicketList:Ticket[] = [];
  showForm=false;
  isAdmin=true;
  ngOnInit(){
    this.ticketServiceCall.getTicketList();
  }
 selectedTicket(ticket:Ticket){
  this.selectedTicketList.push(ticket);
 }
  createdticket(ticket:Ticket){
  this.ticketServiceCall.createTicket(ticket);
  this.ticketServiceCall.getTicketList();
 }
}
