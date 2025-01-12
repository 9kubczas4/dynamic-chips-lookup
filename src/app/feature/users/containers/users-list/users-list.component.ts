import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsersState } from '../../state/users-state.service';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-users-list',
  imports: [TableModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  private readonly usersState = inject(UsersState);

  users = this.usersState.users;
}
