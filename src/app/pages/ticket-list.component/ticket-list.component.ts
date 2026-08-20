import { Component, inject, Input, OnInit, signal,OnChanges,SimpleChanges } from '@angular/core';
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
 // @Input() selectedTicket:Ticket = {} as Ticket;
  selectedTicketList:Ticket[] = [];
  ngOnInit(){
    this.ticketServiceCall.getTicketList();
    //console.log(this.selectedTicket);
  }
 /* ngOnChanges(changes:SimpleChanges){
   // this.selectedTicketList.push(this.selectedTicket);
    console.log(this.selectedTicketList);
  }*/
 selectedTicket(ticket:Ticket){
  this.selectedTicketList.push(ticket);
  console.log(this.selectedTicketList);
 }
}
