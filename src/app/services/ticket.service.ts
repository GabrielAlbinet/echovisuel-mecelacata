import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from '../types/ticket-type.interface';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/tickets';

  private ticketList = signal<(Ticket & { id: number })[]>([]);
  readonly ticketListSignal = this.ticketList.asReadonly();

  ticketIdBeingEdited = signal<number | null>(null);

  getTicketList() {
    this.http.get<(Ticket & { id: number })[]>(this.apiUrl).subscribe(data => {
      this.ticketList.set(data);
    });
  }

  createTicket(ticket: Ticket) {
    this.http.post<Ticket & { id: number }>(this.apiUrl, ticket).subscribe(newTicket => {
      this.ticketList.update(current => [...current, newTicket]);
    });
  }

  updateTicket(id: number, data: Partial<Ticket>) {
    this.http.patch<Ticket & { id: number }>(`${this.apiUrl}/${id}`, data).subscribe(updatedTicket => {
      this.ticketList.update(current =>
        current.map(ticket => ticket.id === id ? updatedTicket : ticket)
      );
    });
  }

  deleteTicket(id: number) {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
      this.ticketList.update(current => current.filter(ticket => ticket.id !== id));
    });
  }
}