import { Component, input } from '@angular/core';
import { Venue } from '../../../types/venue.interface';

@Component({
  imports: [],
  selector: 'app-venue-card',
  styleUrl: './venue-card.component.css',
  templateUrl: './venue-card.component.html',
})
export class VenueCardComponent {

  venue = input.required<Venue>();

}
