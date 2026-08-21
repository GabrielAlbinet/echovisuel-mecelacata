import { Routes } from '@angular/router';
import { TicketListComponent } from './pages/ticket-list.component/ticket-list.component';
import { VenuePageComponent } from './pages/venue/venue-page.component/venue-page.component';
import { SchedulePageComponent } from './pages/schedule/schedule-page.component';

export const routes: Routes = [
  {
    path: 'ticketlist',
    component: TicketListComponent,
  },
  {
    path: 'venues',
    component: VenuePageComponent,
  },
  {
    path: 'schedule',
    component: SchedulePageComponent,
  },
];