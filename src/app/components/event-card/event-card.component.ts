import { Component, input } from '@angular/core';
import { FestivalEvent } from '../../types/festival-event.interface';

@Component({
  selector: 'app-event-card',
  imports: [],
  templateUrl: './event-card.component.html',
})
export class EventCardComponent {
  event = input.required<FestivalEvent>();
}
