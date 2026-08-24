import { Component, OnInit, inject, signal, input, output, effect } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ArtistService } from '../../services/artist.service';
import { VenueServiceTs } from '../../services/venue.service';
import { ScheduleService } from '../../services/schedule.service';
import { Artist } from '../../types/artist.interface';
import { Venue } from '../../types/venue.interface';
import { FestivalEvent } from '../../types/festival-event.interface';

interface PendingEvent {
  artistName: string;
  date: string;
  time: string;
}

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
})
export class ScheduleFormComponent implements OnInit {
  private readonly artistService = inject(ArtistService);
  private readonly venueService = inject(VenueServiceTs);
  private readonly scheduleService = inject(ScheduleService);

  eventToEdit = input<FestivalEvent | null>(null);
  eventCreated = output<FestivalEvent>();
  eventUpdated = output<FestivalEvent>();
  eventEditCancelled = output<void>();

  artists = signal<Artist[]>([]);
  venues = signal<Venue[]>([]);

  showTimeErrorModal = signal(false);
  showConfirmModal = signal(false);
  pendingEvent = signal<PendingEvent | null>(null);

  form = new FormGroup({
    artistId: new FormControl<number | null>(null, Validators.required),
    venueId: new FormControl<number | null>(null, Validators.required),
    date: new FormControl('', Validators.required),
    startTime: new FormControl('', Validators.required),
    endTime: new FormControl('', Validators.required),
  });

  constructor() {
    effect(() => {
      const event = this.eventToEdit();

      if (event) {
        this.form.patchValue({
          artistId: event.artistId,
          venueId: event.venueId,
          date: event.date,
          startTime: event.startTime,
          endTime: event.endTime,
        });
      } else {
        this.form.reset();
      }
    });
  }

  ngOnInit() {
    this.artists.set(this.artistService.getArtists());
    this.venues.set(this.venueService.getVenuesFromService());
  }

  submit() {
    const { artistId, venueId, date, startTime, endTime } = this.form.value;

    if (this.form.invalid) {
      return;
    }

    if (!startTime || !endTime || endTime <= startTime) {
      this.showTimeErrorModal.set(true);
      return;
    }

    const artistName = this.artists().find((artist) => artist.id === artistId)?.name ?? 'Artiste inconnu';
    const formattedDate = new Date(date!).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' });

    this.pendingEvent.set({ artistName, date: formattedDate, time: startTime });
    this.showConfirmModal.set(true);
  }

  closeTimeErrorModal() {
    this.showTimeErrorModal.set(false);
  }

  confirmSubmit() {
    const { artistId, venueId, date, startTime, endTime } = this.form.value;
    const editingEvent = this.eventToEdit();

    if (editingEvent) {
      const updated = this.scheduleService.updateEvent({
        id: editingEvent.id,
        artistId: artistId!,
        venueId: venueId!,
        date: date!,
        startTime: startTime!,
        endTime: endTime!,
        status: editingEvent.status,
      });

      this.eventUpdated.emit(updated);
    } else {
      const created = this.scheduleService.createEvent({
        artistId: artistId!,
        venueId: venueId!,
        date: date!,
        startTime: startTime!,
        endTime: endTime!,
        status: 'scheduled',
      });

      this.eventCreated.emit(created);
    }

    this.form.reset();
    this.showConfirmModal.set(false);
  }

  cancelSubmit() {
    this.showConfirmModal.set(false);
  }

  cancelEdit() {
    this.form.reset();
    this.eventEditCancelled.emit();
  }
}