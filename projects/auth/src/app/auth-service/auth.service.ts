import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userKey = 'user';

  login(email: string) {
    localStorage.setItem(this.userKey, email);
  }

  logout() {
    localStorage.removeItem(this.userKey);
  }

  getUser(): string | null {
    return localStorage.getItem(this.userKey);
  }

  isAuthenticated(): boolean {
    return this.getUser() !== null;
  }
}
