import { Component, input, output, inject, computed } from '@angular/core';
import { FestivalEvent } from '../../types/festival-event.interface';
import { ArtistService } from '../../services/artist.service';

@Component({
  selector: 'app-event-card',
  imports: [],
  templateUrl: './event-card.component.html',
})
export class EventCardComponent {
  private readonly artistService = inject(ArtistService);

  event = input.required<FestivalEvent>();
  edit = output<FestivalEvent>();

  artistName = computed(() => {
    const artist = this.artistService.getArtists().find((artist) => artist.id === this.event().artistId);
    return artist?.name ?? 'Artiste inconnu';
  });
}