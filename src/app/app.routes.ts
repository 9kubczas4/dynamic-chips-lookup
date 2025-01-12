import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'users',
        loadChildren: () => import('./feature/users/routes').then(m => m.routes)
      },
      {
        path: 'products',
        loadChildren: () => import('./feature/products/routes').then(m => m.routes)
      }
    ]
  }
];
