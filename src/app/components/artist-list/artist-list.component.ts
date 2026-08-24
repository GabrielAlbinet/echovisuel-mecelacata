import { Component, inject, signal } from '@angular/core';
import {ArtistService} from '../../services/artist.service';
import { ArtistCardComponent } from '../artist-card/artist-card.component';
import { Artist } from '../../types/artist.interface';

@Component({
  imports: [ArtistCardComponent],
  selector: 'app-artist-list',
  styleUrl: './artist-list.component.css',
  templateUrl: './artist-list.component.html',
})
export class ArtistListComponent {  
private artistService = inject(ArtistService);

artists = this.artistService.artists;


updateSelectedArtist(artistSelected: { name: string; isSelected: boolean }) {}
}