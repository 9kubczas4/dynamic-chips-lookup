import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsersState } from '../../state/users-state.service';

@Component({
  selector: 'app-manage-users-sidebar',
  imports: [],
  templateUrl: './manage-users-sidebar.component.html',
  styleUrl: './manage-users-sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManageUsersSidebarComponent {
  private readonly usersState = inject(UsersState);
}
