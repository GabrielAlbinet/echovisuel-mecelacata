import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
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
    name: new FormControl('', { validators : Validators.required, nonNullable: true}),
    type: new FormControl('', { validators : Validators.required, nonNullable: true}),
    description: new FormControl('', { validators : Validators.required, nonNullable: true}),
    capacity: new FormControl<number>(0, { validators : [Validators.required, Validators.min(1)] ,nonNullable: true}),
    location: new FormControl('', { validators : Validators.required, nonNullable: true}),
    image: new FormControl('', { validators : Validators.required, nonNullable: true}),
  });

  onSubmit() {
    const newVenue = this.venueForm.getRawValue()

    if(this.venueForm.valid){
      this.venueService.addVenue(newVenue);
    }
  }
}
