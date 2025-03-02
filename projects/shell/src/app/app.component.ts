import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from 'auth/AuthService';

@Component({
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'shell';
  private authService = inject(AuthService);

  user: string | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    this.user = localStorage.getItem('user');
  }

  logout() {
    this.authService.logout();
    this.user = null;
    this.router.navigate(['/']);
  }
}
