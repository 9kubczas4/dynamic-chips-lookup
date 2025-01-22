import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { UsersApiService } from '../../services/users-api.service';
import { User } from '../../interfaces/user';
import { finalize } from 'rxjs';
import { take } from 'rxjs';
import { CityLookupComponent } from '../../components/city-lookup/city-lookup.component';

@Component({
  selector: 'app-manage-users-sidebar',
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    CityLookupComponent
  ],
  templateUrl: './manage-users-sidebar.component.html',
  styleUrl: './manage-users-sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManageUsersSidebarComponent {
  private readonly usersService = inject(UsersApiService);

  userForm = inject(FormBuilder).group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zip: ['', Validators.required]
  });

  onSubmit(): void {
    if (this.userForm.valid) {
      this.usersService.createUser(this.userForm.value as Omit<User, 'id'>).pipe(
        take(1),
        finalize(() => this.userForm.reset())
      ).subscribe();
    }
  }
}
