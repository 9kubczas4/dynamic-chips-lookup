import { Routes } from "@angular/router";
import { UsersListComponent } from "./containers/users-list/users-list.component";
import { ManageUsersSidebarComponent } from "./containers/manage-users-sidebar/manage-users-sidebar.component";

export const routes: Routes = [
  {
    path: '',
    component: UsersListComponent
  },
  {
    path: '',
    component: ManageUsersSidebarComponent,
    outlet: 'sidebar'
  }
];
