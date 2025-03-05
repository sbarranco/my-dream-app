import { CommonModule } from '@angular/common';
import { Component, HostBinding, OnInit, signal, inject } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { CARDS } from '../card/card-data';
import { Card } from '../card/card.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CommonModule, RouterModule, CardComponent],
})
export class HomeComponent implements OnInit {
  @HostBinding('class') class = 'app-home';
  private readonly router = inject(Router);

  title = 'shell';

  user = signal<string | null>(null);

  cards: Card[] = CARDS;

  ngOnInit(): void {
    this.user.update(() => localStorage.getItem('user'));
  }

  onClickCardButton(path: string | undefined): void {
    this.router.navigate([path]);
  }
}
