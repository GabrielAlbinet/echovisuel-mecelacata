import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Credentials, User } from '../types/user.interface';

const USER_KEY = 'echovisuel_user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/auth';

  private readonly user = signal<User | null>(this.readStoredUser());

  readonly currentUser = this.user.asReadonly();
  readonly isLoggedIn = computed(() => this.user() !== null);

  login(credentials: Credentials): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/login`, credentials).pipe(
      tap((user) => {
        try {
          localStorage.setItem(USER_KEY, JSON.stringify(user));
        } catch {}
        this.user.set(user);
      }),
    );
  }

  logout() {
    this.http.post<void>(`${this.apiUrl}/logout`, {}).subscribe({ error: () => {} });
    try {
      localStorage.removeItem(USER_KEY);
    } catch {}
    this.user.set(null);
  }

  private readStoredUser(): User | null {
    try {
      const stored = localStorage.getItem(USER_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  }
}