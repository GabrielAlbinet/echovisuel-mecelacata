import { Component, inject, input, output } from '@angular/core';
import { Venue } from '../../../types/venue.interface';
import { VenueServiceTs } from '../../../services/venue-service/venue.service';

@Component({
  imports: [],
  selector: 'app-venue-card',
  styleUrl: './venue-card.component.css',
  templateUrl: './venue-card.component.html',
})
export class VenueCardComponent {
  private venueService = inject(VenueServiceTs);

  venueSelected = output<Venue>();

  selectVenue() {
    this.venueSelected.emit(this.venue());
  }

  venue = input.required<Venue>();

  onEdit() {
    this.venueService.venueIdBeingEdited.set(this.venue().id);
  }

  onDelete() {
    this.venueService.deleteVenue(this.venue().id);
  }
}