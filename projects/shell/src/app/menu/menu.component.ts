import { Component, HostBinding, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { MenuItem } from './menu.model';
import { MatMenuModule } from '@angular/material/menu';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [CommonModule, RouterModule, MatIconModule, MatMenuModule],
})
export class MenuComponent {
  @HostBinding('class') class = 'menu';

  private router = inject(Router);
  private menuService = inject(MenuService);

  user = signal<string | null>(null);
  menuItems$: Observable<MenuItem[]> = this.menuService.menuItems$;

  logout() {
    this.menuService.logout();
    this.router.navigate(['/']);
    window.location.reload();
  }
}
