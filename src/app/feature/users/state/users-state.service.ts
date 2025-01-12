import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { signal } from '@angular/core';

@Injectable()
export class UsersState {
  private readonly _users = signal<User[]>([]);

  users = this._users.asReadonly();

  setUsers(users: User[]): void {
    this._users.set(users);
  }
}
