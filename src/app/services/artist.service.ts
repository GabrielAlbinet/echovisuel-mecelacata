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
  artistIdBeingEdited = signal<number | null>(null);

  constructor() {
    this.http.get<Artist[]>(this.apiUrl).subscribe(data => {
      this.artists.set(data);
    });
  }

  getArtists(): Artist[] {
    return this.artists();
  }

  getArtist(id: number) {
    return this.http.get<Artist>(`${this.apiUrl}/${id}`);
  }

  addArtist(artist: Omit<Artist, 'id'>) {
    this.http.post<Artist>(this.apiUrl, artist).subscribe(newArtist => {
      this.artists.update(current => [...current, newArtist]);
    });
  }

  updateArtist(id: number, data: Partial<Omit<Artist, 'id'>>) {
    this.http.patch<Artist>(`${this.apiUrl}/${id}`, data).subscribe(updatedArtist => {
      this.artists.update(current =>
        current.map(artist => artist.id === id ? updatedArtist : artist)
      );
    });
  }

  deleteArtist(id: number) {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
      this.artists.update(current => current.filter(artist => artist.id !== id));
    });
  }
}