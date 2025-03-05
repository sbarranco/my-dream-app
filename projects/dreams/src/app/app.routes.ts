import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DreamsListComponent } from './dreams-list/dreams-list.component';
import { DreamsformComponent } from './dreams-form/dreams-form.component';

export const DREAMS_ROUTES: Routes = [
  {
    path: '',
    component: DreamsListComponent,
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: DreamsListComponent,
    pathMatch: 'full',
  },
  {
    path: 'create',
    component: DreamsformComponent,
    pathMatch: 'full',
  },
];
