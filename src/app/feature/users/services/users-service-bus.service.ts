import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceBusService {
  private readonly _refresh$ = new Subject<void>();
  private readonly _info$ = new Subject<void>();
  private readonly _create$ = new Subject<void>();

  refresh$ = this._refresh$.asObservable();
  info$ = this._info$.asObservable();
  create$ = this._create$.asObservable();

  refresh(): void {
    this._refresh$.next();
  }

  info(): void {
    this._info$.next();
  }

  create(): void {
    this._create$.next();
  }
}
