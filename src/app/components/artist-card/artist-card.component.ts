import { Component, inject, input, output } from '@angular/core';
import { Artist } from '../../types/artist.interface';
import { ArtistService } from '../../services/artist.service';

@Component({
  imports: [],
  selector: 'app-artist-card',
  styleUrl: './artist-card.component.css',
  templateUrl: './artist-card.component.html',
})
export class ArtistCardComponent {
  private artistService = inject(ArtistService);

  artist = input.required<Artist>();

  selectedArtist = output<{name:string, isSelected:boolean}>();

  onSelect(isSelected: boolean){
    this.selectedArtist.emit({name:this.artist().name, isSelected:isSelected});
  }

  onDelete() {
    this.artistService.deleteArtist(this.artist().id);
  }

  onEdit() {
    this.artistService.artistIdBeingEdited.set(this.artist().id);
  }
}