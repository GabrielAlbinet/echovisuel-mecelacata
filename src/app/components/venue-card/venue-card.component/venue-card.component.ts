import { Component, input, output } from '@angular/core';
import { Venue } from '../../../types/venue.interface';

@Component({
  imports: [],
  selector: 'app-venue-card',
  styleUrl: './venue-card.component.css',
  templateUrl: './venue-card.component.html',
})
export class VenueCardComponent {

  venueSelected = output<Venue>();

  selectVenue() {
    this.venueSelected.emit(this.venue());
  }

  venue = input.required<Venue>();

}
