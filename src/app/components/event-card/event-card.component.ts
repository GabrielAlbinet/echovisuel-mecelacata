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
  remove = output<FestivalEvent>();

  artistName = computed(() => {
    const event = this.event();
    return (
      event.artist?.name ??
      this.artistService.artists().find((artist) => artist.id === event.artistId)?.name ??
      'Artiste inconnu'
    );
  });

  venueName = computed(() => this.event().venue?.name ?? `Lieu #${this.event().venueId}`);
}