import { Service, signal } from '@angular/core';
import { Ticket } from '../types/ticket-type.interface';


@Service()
export class TicketService {
    private ticketList = signal<Ticket[]>([]); //initialisation du signal
    readonly ticketListSignal = this.ticketList.asReadonly();
}
