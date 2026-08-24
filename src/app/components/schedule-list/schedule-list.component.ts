import { Component, input, output } from '@angular/core';
import { EventCardComponent } from '../event-card/event-card.component';
import { FestivalEvent } from '../../types/festival-event.interface';

@Component({
  selector: 'app-schedule-list',
  imports: [EventCardComponent],
  templateUrl: './schedule-list.component.html',
})
export class ScheduleListComponent {
  dateKeys = input.required<string[]>();
  groupedEvents = input.required<Record<string, FestivalEvent[]>>();
  edit = output<FestivalEvent>();

  formatDate(dateKey: string): string {
    return new Date(dateKey).toLocaleDateString('fr-FR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    });
  }
}