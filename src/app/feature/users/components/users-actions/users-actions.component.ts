import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { UsersServiceBusService } from '../../services/users-service-bus.service';

@Component({
  selector: 'app-users-actions',
  imports: [ButtonModule],
  templateUrl: './users-actions.component.html',
  styleUrl: './users-actions.component.scss',
})
export class UsersActionsComponent {
  private readonly serviceBus = inject(UsersServiceBusService);

  refresh(): void {
    this.serviceBus.refresh();
  }

  info(): void {
    this.serviceBus.info();
  }

  create(): void {
    this.serviceBus.create();
  }
}
