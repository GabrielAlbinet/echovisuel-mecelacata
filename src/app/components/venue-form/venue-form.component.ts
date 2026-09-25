import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { VenueServiceTs } from '../../services/venue-service/venue.service';
import { Venue } from '../../types/venue.interface';

@Component({
  imports: [ ReactiveFormsModule ],
  selector: 'app-venue-form',
  styleUrl: './venue-form.component.css',
  templateUrl: './venue-form.component.html',
})
export class VenueForm {

  venueService = inject(VenueServiceTs);

  venueForm = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    description: new FormControl(''),
    capacity: new FormControl<number | null>(null),
    location: new FormControl(''),
    image: new FormControl(''),
  });

  onSubmit() {
    const editingId = this.venueService.venueIdBeingEdited();
    const value = this.venueForm.value;

    if (editingId !== null) {
      const data: Partial<Omit<Venue, 'id'>> = {};
      if (value.name) data.name = value.name;
      if (value.type) data.type = value.type;
      if (value.description) data.description = value.description;
      if (value.capacity) data.capacity = value.capacity;
      if (value.location) data.location = value.location;
      if (value.image) data.image = value.image;

      this.venueService.updateVenue(editingId, data);
      this.venueService.venueIdBeingEdited.set(null);
    } else {
      this.venueService.addVenue(value as Omit<Venue, 'id'>);
    }

    this.venueForm.reset();
  }
}