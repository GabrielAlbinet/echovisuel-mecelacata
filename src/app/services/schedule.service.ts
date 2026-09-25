import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { EventPayload, FestivalEvent } from '../types/festival-event.interface';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/events';

  private events = signal<FestivalEvent[]>([]);
  readonly eventsSignal = this.events.asReadonly();

  getEventsFromService(): Observable<FestivalEvent[]> {
    return this.http.get<FestivalEvent[]>(this.apiUrl).pipe(
      tap((events) => this.events.set(events)),
    );
  }

  createEvent(newEvent: EventPayload): Observable<FestivalEvent> {
    return this.http.post<FestivalEvent>(this.apiUrl, newEvent).pipe(
      tap((created) => this.events.update((events) => [...events, created])),
    );
  }

  updateEvent(id: number, data: Partial<EventPayload>): Observable<FestivalEvent> {
    return this.http.patch<FestivalEvent>(`${this.apiUrl}/${id}`, data).pipe(
      tap((updated) =>
        this.events.update((events) => events.map((event) => (event.id === id ? updated : event))),
      ),
    );
  }

  deleteEvent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.events.update((events) => events.filter((event) => event.id !== id))),
    );
  }
}