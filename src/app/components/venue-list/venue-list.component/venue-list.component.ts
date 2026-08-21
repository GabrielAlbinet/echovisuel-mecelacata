import { Component, inject, signal, OnInit } from '@angular/core';
import { VenueServiceTs } from '../../../services/venue-service/venue.service';
import { Venue } from '../../../types/venue.interface';
import { VenueCardComponent } from '../../venue-card/venue-card.component/venue-card.component';

@Component({
  imports: [ VenueCardComponent ],
  selector: 'app-venue-list',
  styleUrl: './venue-list.component.css',
  templateUrl: './venue-list.component.html',
})

export class VenueListComponent implements OnInit {

  venueService = inject(VenueServiceTs);

  ngOnInit() {
    this.venueService.initVenue();
  }

  arrayOfVenues =  signal<Venue[]>(this.venueService.venues());

  lastSelectedVenue: Venue | undefined;

  onVenueSelected(venue: Venue) {
    this.lastSelectedVenue = venue;
  }

  
}
