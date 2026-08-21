import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  imports: [ ReactiveFormsModule ],
  selector: 'app-venue-form',
  styleUrl: './venue-form.component.css',
  templateUrl: './venue-form.component.html',
})
export class VenueForm {

  form = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    description: new FormControl(''),
    capacity: new FormControl(''),
    location: new FormControl(''),
    image: new FormControl(''),
  });
}
