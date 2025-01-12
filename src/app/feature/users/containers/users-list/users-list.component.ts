import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsersState } from '../../state/users-state.service';

@Component({
  selector: 'app-users-list',
  imports: [],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  private readonly usersState = inject(UsersState);
}
