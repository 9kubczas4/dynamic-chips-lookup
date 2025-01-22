import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./orders-layout.component').then(c => c.OrdersLayoutComponent)
  },
];
