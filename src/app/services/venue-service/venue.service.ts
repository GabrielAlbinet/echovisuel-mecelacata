import { Injectable, signal } from '@angular/core';
import { data } from '../../data/venue.data';

import { Venue } from '../../types/venue.interface';

@Injectable({
    providedIn: 'root'
})
export class VenueServiceTs {
    
    venues = signal<Venue[]>([]);

    getVenuesFromService(): Venue[] {
        return data;
    }

    addVenue(venue: Venue) {
        this.venues.update(current => [...current, venue]);
    }

    initVenue() {
        const venuesFromData = this.getVenuesFromService();
        this.venues.update(current => [...current, ...venuesFromData]);
    }

}
