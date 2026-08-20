import { Component, inject } from '@angular/core';
import { VenueServiceTs } from '../../../services/venue-service/venue.service';

@Component({
  imports: [],
  selector: 'app-venue-list',
  styleUrl: './venue-list.component.css',
  templateUrl: './venue-list.component.html',
})

export class VenueListComponent {

  venueService = inject(VenueServiceTs);

  arrayOfVenues =  this.venueService.getVenuesFromService();
}
