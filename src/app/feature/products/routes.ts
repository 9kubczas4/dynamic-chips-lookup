import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./containers/products-list/products-list.component').then(
        c => c.ProductsListComponent
      ),
  },
];
