import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Venue } from '../../types/venue.interface';

@Injectable({
    providedIn: 'root'
})
export class VenueServiceTs {
    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:3000/api/venues';

    venues = signal<Venue[]>([]);
    venueIdBeingEdited = signal<number | null>(null);

    addVenue(venue: Omit<Venue, 'id'>) {
        this.http.post<Venue>(this.apiUrl, venue).subscribe(newVenue => {
            this.venues.update(current => [...current, newVenue]);
        });
    }

    updateVenue(id: number, data: Partial<Omit<Venue, 'id'>>) {
        this.http.patch<Venue>(`${this.apiUrl}/${id}`, data).subscribe(updatedVenue => {
            this.venues.update(current =>
                current.map(venue => venue.id === id ? updatedVenue : venue)
            );
        });
    }

    deleteVenue(id: number) {
        this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
            this.venues.update(current => current.filter(venue => venue.id !== id));
        });
    }

    initVenue() {
        this.http.get<Venue[]>(this.apiUrl).subscribe(data => {
            this.venues.set(data);
        });
    }
}