import { Service, signal } from '@angular/core';
import { Ticket } from '../types/ticket-type.interface';
import { ticketData } from '../data/ticket.data';


@Service()
export class TicketService {
    private ticketList = signal<Ticket[]>([]); //initialisation du signal
    readonly ticketListSignal = this.ticketList.asReadonly();
    getTicketList(){
        this.ticketList.set(ticketData);
    }
    createTicket(ticket:Ticket){
        ticketData.push(ticket);
    }
}
