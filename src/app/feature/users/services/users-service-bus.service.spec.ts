import { TestBed } from '@angular/core/testing';

import { UsersServiceBusService } from './users-service-bus.service';

describe('UsersServiceBusService', () => {
  let service: UsersServiceBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersServiceBusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
