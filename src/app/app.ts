import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VenueListComponent } from './components/venue-list/venue-list.component/venue-list.component';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('echo');
}
