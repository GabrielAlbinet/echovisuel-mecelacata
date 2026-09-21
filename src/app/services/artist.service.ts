import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Artist } from '../types/artist.interface';

@Injectable({
  providedIn: 'root'
})
    export class ArtistService {
    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:3000/api/artists';

    artists = signal<Artist[]>([]);

    constructor() {
        this.http.get<Artist[]>(this.apiUrl).subscribe(data => {
        this.artists.set(data);
        });
    }

    getArtists(): Artist[] {
        return this.artists();
    }

    addArtist(artist: Omit<Artist, 'id'>) {
        this.http.post<Artist>(this.apiUrl, artist).subscribe(newArtist => {
        this.artists.update(current => [...current, newArtist]);
        });
    }
}