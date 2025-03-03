import { Routes } from '@angular/router';
import { DreamsAppComponent } from './app.component';
import { DreamsListComponent } from './dreams-list/dreams-list.component';
import { DreamsformComponent } from './dreams-form/dreams-form.component';

export const DREAMS_ROUTES: Routes = [
  {
    path: '',
    component: DreamsAppComponent,
    pathMatch: 'full',
  },
  {
    path: 'dreams-list',
    component: DreamsListComponent,
    pathMatch: 'full',
  },
  {
    path: 'dreams-form',
    component: DreamsformComponent,
    pathMatch: 'full',
  },
];
