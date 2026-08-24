import { Component } from '@angular/core';
import { VenueListComponent } from '../../../components/venue-list/venue-list.component/venue-list.component';
import { VenueForm } from '../../../components/venue-form/venue-form.component';

@Component({
  imports: [ VenueListComponent, VenueForm ],
  selector: 'app-venue-page.component',
  styleUrl: './venue-page.component.css',
  templateUrl: './venue-page.component.html',
})
export class VenuePageComponent {

}
