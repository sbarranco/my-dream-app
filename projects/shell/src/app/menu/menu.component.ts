import { Component, HostBinding } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { inject } from '@angular/core';

interface MenuItem {
  label: string;
  path: string;
  authRequired: boolean;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  imports: [RouterModule],
})
export class MenuComponent {
  @HostBinding('class') class = 'menu';

  router = inject(Router);

  user: string | null = null;
  menuItems: MenuItem[] = [];

  private allMenuItems: MenuItem[] = [
    { label: 'Home', path: '/', authRequired: false },
    { label: 'About', path: '/about', authRequired: false },
    { label: 'Dreams', path: '/dreams', authRequired: true },
    { label: 'Login', path: '/auth', authRequired: false },
  ];

  ngOnInit() {
    // this.user = this.authService.getUser();
    this.updateMenuItems();
  }

  updateMenuItems() {
    this.menuItems = this.allMenuItems.filter(
      (item) => !item.authRequired || this.user
    );
  }

  logout() {
    // this.authService.logout();
    localStorage.removeItem('user');
    this.user = null;
    this.updateMenuItems();
    this.router.navigate(['/']);
  }
}
