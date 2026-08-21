import { Component } from '@angular/core';
import { Dates, FestivalType } from '../../types/festival.type';
import { input } from '@angular/core';
import { DatePipe } from '@angular/common';



@Component({
  imports: [DatePipe],
  selector: 'app-festival-datescomponent',
  styleUrl: './festival-dates.component.css',
  templateUrl: './festival-dates.component.html',
})
export class FestivalDatesComponent {
  dates = input<Dates[]>();
}
