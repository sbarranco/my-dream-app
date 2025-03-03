import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CommonModule, RouterModule],
})
export class HomeComponent implements OnInit {
  title = 'shell';

  user = signal<string | null>(null);

  ngOnInit(): void {
    this.user.update(() => localStorage.getItem('user'));
  }
}
