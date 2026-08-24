import { Routes } from '@angular/router';
import { TicketListComponent } from './pages/ticket-list.component/ticket-list.component';
import { VenuePageComponent } from './pages/venue/venue-page.component/venue-page.component';
import { SchedulePageComponent } from './pages/schedule/schedule-page.component';
import { FestivalPageComponent } from './pages/festival-page.component/festival-page.component';
import { ParticipantPageComponent } from './pages/participant/participant-page.component';
import { FestivalFormComponent } from './pages/festival-form.component/festival-form.component';

export const routes: Routes = [
  {
    path: 'tickets',
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
  {
    path: 'festival',
    component: FestivalPageComponent
  },
  {
    path: 'festival/:name/edit',
    component: FestivalFormComponent
  },
  {
    path: 'participants',
    component: ParticipantPageComponent,
  },
];
