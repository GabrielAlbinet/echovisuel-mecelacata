import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  imports: [DatePipe],
  selector: 'app-festival-datescomponent',
  styleUrl: './festival-dates.component.css',
  templateUrl: './festival-dates.component.html',
})
export class FestivalDatesComponent {
  startDate = input.required<string>();
  endDate = input.required<string>();
}