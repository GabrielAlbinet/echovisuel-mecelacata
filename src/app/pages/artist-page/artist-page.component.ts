import { Component } from '@angular/core';
import { ArtistListComponent } from '../../components/artist-list/artist-list.component';
import { ArtistFormComponent } from '../../components/artist-form/artist-form.component';

@Component({
  imports: [ArtistListComponent,ArtistFormComponent],
  selector: 'app-artist-page',
  styleUrl: './artist-page.component.css',
  templateUrl: './artist-page.component.html',
})
export class ArtistPageComponent {}
