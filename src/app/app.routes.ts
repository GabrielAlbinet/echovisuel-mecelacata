import { Routes } from '@angular/router';
import { VenuePageComponent } from './pages/venue/venue-page.component/venue-page.component';
import { SchedulePageComponent } from './pages/schedule/schedule-page.component';

export const routes: Routes = [
  {
    path: 'venues',
    component: VenuePageComponent,
  },
  {
    path: 'schedule',
    component: SchedulePageComponent,
  },
];
