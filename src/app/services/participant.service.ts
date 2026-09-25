import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Participant, ParticipantPayload } from '../types/participant.interface';

@Injectable({
  providedIn: 'root',
})
export class ParticipantService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/participants';

  private participants = signal<Participant[]>([]);
  readonly participantsSignal = this.participants.asReadonly();

  getParticipants(email = ''): Observable<Participant[]> {
    const params = email ? new HttpParams().set('email', email) : undefined;
    return this.http.get<Participant[]>(this.apiUrl, { params }).pipe(
      tap((participants) => this.participants.set(participants)),
    );
  }

  createParticipant(data: ParticipantPayload): Observable<Participant> {
    return this.http.post<Participant>(this.apiUrl, data).pipe(
      tap((created) => this.participants.update((participants) => [...participants, created])),
    );
  }

  updateParticipant(id: number, data: Partial<ParticipantPayload>): Observable<Participant> {
    return this.http.patch<Participant>(`${this.apiUrl}/${id}`, data).pipe(
      tap((updated) =>
        this.participants.update((participants) =>
          participants.map((participant) => (participant.id === id ? updated : participant)),
        ),
      ),
    );
  }

  deleteParticipant(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() =>
        this.participants.update((participants) => participants.filter((participant) => participant.id !== id)),
      ),
    );
  }
}