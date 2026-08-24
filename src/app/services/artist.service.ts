import { Injectable, Service, signal } from '@angular/core';
import artists from '../data/artist.data';
import { Artist } from '../types/artist.interface';
import { ArtistFormComponent } from '../components/artist-form/artist-form.component';
import { form } from '@angular/forms/signals';

@Injectable({
    providedIn: 'root'
})
export class ArtistService {
    artists = signal<Artist[]>(artists);

    getArtists(): Artist[] {

        return this.artists();

          
    }
addArtist(artist: Artist) {
    this.artists.update(current => [...current, artist]);
  }

}


