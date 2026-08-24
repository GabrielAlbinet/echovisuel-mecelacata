import { Injectable } from '@angular/core';
import artists from '../data/artist.data';
import { Artist } from '../types/artist.interface';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  getArtists(): Artist[] {
    return artists;
  }
}
