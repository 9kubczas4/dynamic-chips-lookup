import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeatureLayoutComponent } from '../../shared/components/feature-layout/feature-layout.component';
import { ManageUsersSidebarComponent } from './containers/manage-users-sidebar/manage-users-sidebar.component';
import { UsersState } from './state/users-state.service';
import { UsersServiceBusService } from './services/users-service-bus.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-users-layout',
  imports: [RouterOutlet, FeatureLayoutComponent, ManageUsersSidebarComponent, ToastModule],
  template: `
    <p-toast></p-toast>
    <app-feature-layout [sidebar]="sidebar">
      <router-outlet></router-outlet>
    </app-feature-layout>

    <ng-template #sidebar>
      <app-manage-users-sidebar></app-manage-users-sidebar>
    </ng-template>
  `,
  styles: [
    `
      :host {
        width: 100%;
      }
    `
  ],
  providers: [UsersState, MessageService]
})
export class UsersLayoutComponent {
  private readonly serviceBus = inject(UsersServiceBusService);
  private readonly messageService = inject(MessageService);

  ngOnInit(): void {
    this.serviceBus.refresh$.subscribe(() => {
      this.messageService.add({
        severity: 'info',
        summary: 'Refresh',
        detail: 'Users list refreshed'
      });
    });

    this.serviceBus.info$.subscribe(() => {
      this.messageService.add({
        severity: 'info',
        summary: 'Info',
        detail: 'User info'
      });
    });

    this.serviceBus.create$.subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Create',
        detail: 'User created'
      });
    });
  }
}
