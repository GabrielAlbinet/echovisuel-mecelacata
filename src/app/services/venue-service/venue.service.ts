import { Injectable } from '@angular/core';
import { data } from '../../data/venue.data';

import { Venue } from '../../types/venue.interface';

@Injectable({
    providedIn: 'root'
})
export class VenueServiceTs {
    
    getVenuesFromService(): Venue[] {
        return data;
    }

}
