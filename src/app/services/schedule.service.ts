import { Injectable, signal} from '@angular/core';
import { Observable, of, tap} from 'rxjs';
import { FestivalEvent} from '../types/festival-event.interface';
import { FESTIVAL_EVENTS} from '../data/festival-events.data';

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
}
