import { Routes } from '@angular/router';
import { FEATURES, HOME } from './feature/features';
import { pageTrackerGuard } from './core/guards/page-tracker.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: HOME,
    pathMatch: 'full'
  },
  {
    path: 'home',
    canActivate: [pageTrackerGuard],
    loadComponent: () => import('./feature/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: FEATURES.users,
    canActivate: [pageTrackerGuard],
    loadChildren: () => import('./feature/users/routes').then(m => m.routes)
  },
  {
    path: FEATURES.products,
    canActivate: [pageTrackerGuard],
    loadChildren: () => import('./feature/products/routes').then(m => m.routes)
  },
  {
    path: FEATURES.shops,
    canActivate: [pageTrackerGuard],
    loadChildren: () => import('./feature/shops/routes').then(m => m.routes)
  },
  {
    path: FEATURES.orders,
    canActivate: [pageTrackerGuard],
    loadChildren: () => import('./feature/orders/routes').then(m => m.routes)
  },
];
