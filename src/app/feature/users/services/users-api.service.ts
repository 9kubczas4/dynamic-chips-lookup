import { inject, Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable, of, tap } from 'rxjs';
import { UsersState } from '../state/users-state.service';

@Injectable()
export class UsersApiService {
  private readonly usersState = inject(UsersState);

  private firstNames = [
    'James',
    'Emma',
    'Liam',
    'Olivia',
    'Noah',
    'Ava',
    'William',
    'Sophia',
    'Lucas',
    'Isabella',
    'Henry',
    'Mia',
    'Theodore',
    'Charlotte',
    'Jack',
    'Amelia',
    'Benjamin',
    'Harper',
    'Oliver',
    'Evelyn',
  ];

  private lastNames = [
    'Smith',
    'Johnson',
    'Williams',
    'Brown',
    'Jones',
    'Garcia',
    'Miller',
    'Davis',
    'Rodriguez',
    'Martinez',
    'Anderson',
    'Taylor',
    'Thomas',
    'Moore',
    'Jackson',
    'Martin',
    'Lee',
    'Thompson',
    'White',
    'Harris',
  ];

  private cities = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
    'Philadelphia',
    'San Antonio',
    'San Diego',
    'Dallas',
    'San Jose',
    'Austin',
    'Seattle',
    'Denver',
    'Boston',
    'Nashville',
    'Portland',
    'Miami',
    'Atlanta',
    'San Francisco',
    'Detroit',
  ];

  private states = [
    { name: 'California', abbr: 'CA' },
    { name: 'Texas', abbr: 'TX' },
    { name: 'Florida', abbr: 'FL' },
    { name: 'New York', abbr: 'NY' },
    { name: 'Illinois', abbr: 'IL' },
    { name: 'Pennsylvania', abbr: 'PA' },
    { name: 'Ohio', abbr: 'OH' },
    { name: 'Georgia', abbr: 'GA' },
    { name: 'Michigan', abbr: 'MI' },
    { name: 'North Carolina', abbr: 'NC' },
  ];

  private streetNames = [
    'Main Street',
    'Oak Avenue',
    'Maple Drive',
    'Cedar Lane',
    'Pine Road',
    'Washington Street',
    'Park Avenue',
    'Lake Drive',
    'Hill Road',
    'River Street',
  ];

  private getRandomElement<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }

  private generatePhoneNumber(): string {
    const areaCode = Math.floor(Math.random() * 900) + 100;
    const prefix = Math.floor(Math.random() * 900) + 100;
    const lineNumber = Math.floor(Math.random() * 9000) + 1000;
    return `(${areaCode}) ${prefix}-${lineNumber}`;
  }

  private generateZipCode(): string {
    return String(Math.floor(Math.random() * 90000) + 10000);
  }

  private generateStreetNumber(): number {
    return Math.floor(Math.random() * 9000) + 1000;
  }

  getUsers(): Observable<User[]> {
    return of(
      Array.from({ length: 10 }, (_, index) => {
        const firstName = this.getRandomElement(this.firstNames);
        const lastName = this.getRandomElement(this.lastNames);
        const streetNumber = this.generateStreetNumber();
        const streetName = this.getRandomElement(this.streetNames);
        const state = this.getRandomElement(this.states);

        return {
          id: `user-${index + 1}`,
          firstName,
          lastName,
          email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,
          phone: this.generatePhoneNumber(),
          address: `${streetNumber} ${streetName}`,
          city: this.getRandomElement(this.cities),
          state: state.abbr,
          zip: this.generateZipCode(),
        };
      })
    ).pipe(tap(users => this.usersState.setUsers(users)));
  }

  createUser(user: Omit<User, 'id'>): Observable<User> {
    const newUser: User = {
      ...user,
      id: `user-${Date.now()}`, // Generate a unique ID
    };

    this.usersState.addUser(newUser);

    // In a real app, this would be an HTTP POST request
    return of(newUser);
  }
}
