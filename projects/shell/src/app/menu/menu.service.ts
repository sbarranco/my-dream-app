import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MenuItem } from './menu.model';
import { PRIVATE_MENU_ITEMS, PUBLIC_MENU_ITEMS } from './menu-data';
import { AuthService } from '../../../../auth/src/app/auth-service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private menuItemsSubject = new BehaviorSubject<MenuItem[]>([]);
  menuItems$: Observable<MenuItem[]> = this.menuItemsSubject.asObservable();

  constructor(private authService: AuthService) {
    this.authService.user$.subscribe((user) => {
      this.updateMenuItems(user);
    });
  }

  updateMenuItems(user?: string | null): void {
    if (user) {
      this.menuItemsSubject.next(PRIVATE_MENU_ITEMS);
    } else {
      this.menuItemsSubject.next(PUBLIC_MENU_ITEMS);
    }
  }

  logout(): void {
    localStorage.removeItem('user');
    this.updateMenuItems();
  }
}
