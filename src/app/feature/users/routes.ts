import { Routes } from '@angular/router';
import { UsersListComponent } from './containers/users-list/users-list.component';
import { UsersActionsComponent } from './components/users-actions/users-actions.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./users-layout.component').then(c => c.UsersLayoutComponent),
    children: [
      {
        path: '',
        component: UsersListComponent,
      },
    ],
  },
  {
    path: '',
    component: UsersActionsComponent,
    outlet: 'actions',
  },
];
