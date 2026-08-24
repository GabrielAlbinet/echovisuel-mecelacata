import { Component, input, output } from '@angular/core';
import {Artist} from '../../types/artist.interface';

@Component({
  imports: [],
  selector: 'app-artist-card',
  styleUrl: './artist-card.component.css',
  templateUrl: './artist-card.component.html',
})
export class ArtistCardComponent {

artist = input.required<Artist>();

selectedArtist = output<{name:string, isSelected:boolean}>();

onSelect(isSelected: boolean){
  this.selectedArtist.emit({name:this.artist().name, isSelected:isSelected});
}
}

