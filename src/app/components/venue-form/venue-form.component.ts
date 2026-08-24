import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
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
    name: new FormControl('', { validators : Validators.required, nonNullable: true}),
    type: new FormControl('', { validators : Validators.required, nonNullable: true}),
    description: new FormControl('', { validators : Validators.required, nonNullable: true}),
    capacity: new FormControl<number>(0, { validators : [Validators.required, Validators.min(1)] ,nonNullable: true}),
    location: new FormControl('', { validators : Validators.required, nonNullable: true}),
    image: new FormControl('', { validators : Validators.required, nonNullable: true}),
  });

  onSubmit() {
    const newVenue: Venue = {
      id: this.venueService.venues().length + 1,
      name: this.venueForm.getRawValue().name,
      type: this.venueForm.getRawValue().type,
      description: this.venueForm.getRawValue().description,
      capacity: this.venueForm.getRawValue().capacity,
      location: this.venueForm.getRawValue().location,
      image: this.venueForm.getRawValue().image,
    }

    if(this.venueForm.valid){
      this.venueService.addVenue(newVenue);
      this.venueForm.reset();
    }
  }
}
