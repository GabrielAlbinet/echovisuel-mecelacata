import { Component, inject } from '@angular/core';
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

artists: Artist[] = [];

ngOnInit(){

 this.artists =  this.artistService.getArtists();
}

updateSelectedArtist(artistSelected: {name:string, isSelected:boolean}){}

}