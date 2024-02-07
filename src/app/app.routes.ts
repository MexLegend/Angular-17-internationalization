import { Routes } from '@angular/router';
import { UserService } from './core/services/user.service';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users',
  },
  {
    path: 'users',
    providers: [UserService],
    canMatch: [authGuard],
    loadComponent: () =>
      import('./pages/users/users.component').then(
        (comp) => comp.UsersComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (comp) => comp.NotFoundComponent
      ),
  },
];
