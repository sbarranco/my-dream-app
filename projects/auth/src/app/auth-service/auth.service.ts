import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userKey = 'user';
  private userSubject = new BehaviorSubject<string | null>(null);
  user$ = this.userSubject.asObservable();

  login(user: string) {
    localStorage.setItem(this.userKey, user);
    this.userSubject.next(user);
  }

  logout() {
    localStorage.removeItem(this.userKey);
    this.userSubject.next(null);
  }

  getUser(): string | null {
    return localStorage.getItem(this.userKey);
  }

  isAuthenticated(): boolean {
    return this.getUser() !== null;
  }
}
