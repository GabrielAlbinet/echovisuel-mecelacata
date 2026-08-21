import { Service } from '@angular/core';
import artists from '../data/artist.data';
import { Artist } from '../types/artist.interface';

@Service()
export class ArtistService {
getArtists(): Artist[]{

    return artists;
}

}
