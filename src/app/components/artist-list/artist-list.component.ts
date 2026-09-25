import { Component, inject, OnInit } from '@angular/core';
import { ArtistService } from '../../services/artist.service';
import { ArtistCardComponent } from '../artist-card/artist-card.component';

@Component({
  imports: [ArtistCardComponent],
  selector: 'app-artist-list',
  styleUrl: './artist-list.component.css',
  templateUrl: './artist-list.component.html',
})
export class ArtistListComponent implements OnInit {
  private artistService = inject(ArtistService);

  artists = this.artistService.artists;

  ngOnInit() {
    this.artistService.getArtists();
  }

  updateSelectedArtist(artistSelected: { name: string; isSelected: boolean }) {}
}