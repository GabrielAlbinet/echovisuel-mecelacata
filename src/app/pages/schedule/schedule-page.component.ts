import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { ScheduleService } from '../../services/schedule.service';
import { ScheduleListComponent } from '../../components/schedule-list/schedule-list.component';
import { ScheduleFormComponent } from '../../components/schedule-form/schedule-form.component';
import { FestivalEvent } from '../../types/festival-event.interface';

@Component({
  selector: 'app-schedule-page',
  imports: [ScheduleListComponent, ScheduleFormComponent],
  templateUrl: './schedule-page.component.html',
})
export class SchedulePageComponent implements OnInit {
  private readonly scheduleService = inject(ScheduleService);

  readonly events = this.scheduleService.eventsSignal;
  isLoading = signal(true);
  eventToEdit = signal<FestivalEvent | null>(null);

  readonly groupedEvents = computed(() => this.groupByDate(this.events()));
  readonly sortedDateKeys = computed(() => Object.keys(this.groupedEvents()).sort());

  ngOnInit() {
    this.loadSchedule();
  }

  onEventCreated(event: FestivalEvent) {}

  onEditRequested(event: FestivalEvent) {
    this.eventToEdit.set(event);
  }

  onEventUpdated() {
    this.eventToEdit.set(null);
  }

  onEditCancelled() {
    this.eventToEdit.set(null);
  }

  private loadSchedule() {
    this.isLoading.set(true);
    this.scheduleService.getEventsFromService().subscribe({
      next: () => this.isLoading.set(false),
      error: () => this.isLoading.set(false),
    });
  }

  private groupByDate(events: FestivalEvent[]): Record<string, FestivalEvent[]> {
    const groups: Record<string, FestivalEvent[]> = {};

    for (const event of events) {
      if (!groups[event.date]) {
        groups[event.date] = [];
      }
      groups[event.date].push(event);
    }

    for (const dateKey of Object.keys(groups)) {
      groups[dateKey].sort((a, b) => a.startTime.localeCompare(b.startTime));
    }

    return groups;
  }
}