import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('../../../auth/src/app/app.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: 'dreams',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('../../../dreams/src/app/app.routes').then((m) => m.DREAMS_ROUTES),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
