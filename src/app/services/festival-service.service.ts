import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { FestivalPayload, FestivalType } from '../types/festival.type';

@Injectable({
  providedIn: 'root',
})
export class FestivalServiceService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/festivals';

  private readonly festivals = signal<FestivalType[]>([]);
  readonly festivalsList = this.festivals.asReadonly();

  loadFestivals(): Observable<FestivalType[]> {
    return this.http.get<FestivalType[]>(this.apiUrl).pipe(
      tap((festivals) => this.festivals.set(festivals)),
    );
  }

  getFestivalById(id: number): Observable<FestivalType> {
    return this.http.get<FestivalType>(`${this.apiUrl}/${id}`);
  }

  createFestival(data: FestivalPayload): Observable<FestivalType> {
    return this.http.post<FestivalType>(this.apiUrl, data).pipe(
      tap((created) => this.festivals.update((festivals) => [...festivals, created])),
    );
  }

  updateFestival(id: number, data: Partial<FestivalPayload>): Observable<FestivalType> {
    return this.http.patch<FestivalType>(`${this.apiUrl}/${id}`, data).pipe(
      tap((updated) =>
        this.festivals.update((festivals) =>
          festivals.map((festival) => (festival.id === id ? updated : festival)),
        ),
      ),
    );
  }

  deleteFestival(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.festivals.update((festivals) => festivals.filter((festival) => festival.id !== id))),
    );
  }
}