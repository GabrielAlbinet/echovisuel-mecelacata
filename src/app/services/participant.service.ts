import { Service, signal } from '@angular/core';
import { participantTab } from '../data/participant.data';
import { Participant } from '../types/participant.interface';
import { Observable, of } from 'rxjs';

@Service()
export class ParticipantService {

	private participants = signal<Participant[]>([]);
	readonly participantsSignal = this.participants.asReadonly();

	getParticipants(): Observable<Participant[]>{
		this.participants.set(participantTab);
		return of(this.participants());
	}
}
