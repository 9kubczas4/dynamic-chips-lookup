import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    loadChildren: () => import('./feature/users/routes').then(m => m.routes)
  },
  {
    path: 'products',
    loadChildren: () => import('./feature/products/routes').then(m => m.routes)
  }
];
