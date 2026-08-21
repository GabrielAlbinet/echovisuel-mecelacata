import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { VenueServiceTs } from '../../services/venue-service/venue.service';

@Component({
  imports: [ ReactiveFormsModule ],
  selector: 'app-venue-form',
  styleUrl: './venue-form.component.css',
  templateUrl: './venue-form.component.html',
})
export class VenueForm {

  venueService = inject(VenueServiceTs);

  venueForm = new FormGroup({
    name: new FormControl('', { nonNullable: true}),
    type: new FormControl('', { nonNullable: true}),
    description: new FormControl('', { nonNullable: true}),
    capacity: new FormControl<number>(0, { nonNullable: true}),
    location: new FormControl('', { nonNullable: true}),
    image: new FormControl('', { nonNullable: true}),
  });

  onSubmit() {
    const newVenue = this.venueForm.getRawValue()

    this.venueService.addVenue(newVenue);
  }
}
