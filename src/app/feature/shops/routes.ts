import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shops-layout.component').then(c => c.ShopsLayoutComponent),
  },
];
