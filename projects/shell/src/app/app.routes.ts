import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('../../../auth/src/app/app.component').then((m) => m.AppComponent),
  },
  {
    path: 'dreams',
    loadComponent: () =>
      import('../../../dreams/src/app/app.component').then(
        (m) => m.AppComponent
      ),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
