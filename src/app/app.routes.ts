import { Routes } from '@angular/router';
import { ParticipantListComponent } from './components/participant-list.component/participant-list.component';

export const routes: Routes = [
	{
		path: 'participants',
		component: ParticipantListComponent,
	}
];
