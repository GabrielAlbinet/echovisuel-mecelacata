import { Injectable, signal } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { FestivalEvent } from '../types/festival-event.interface';
import { FESTIVAL_EVENTS } from '../data/festival-events.data';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  private events = signal<FestivalEvent[]>([]);
  readonly eventsSignal = this.events.asReadonly();

  getEventsFromService(): Observable<FestivalEvent[]> {
    return of(FESTIVAL_EVENTS).pipe(
      tap((events) => this.events.set(events)),
    );
  }

  createEvent(newEvent: Omit<FestivalEvent, 'id'>): FestivalEvent {
    const event: FestivalEvent = {
      ...newEvent,
      id: this.generateId(),
    };

    this.events.update((events) => [...events, event]);

    return event;
  }

  private generateId(): number {
    const currentEvents = this.events();
    const maxId = currentEvents.reduce((max, event) => Math.max(max, event.id), 0);
    return maxId + 1;
  }
}