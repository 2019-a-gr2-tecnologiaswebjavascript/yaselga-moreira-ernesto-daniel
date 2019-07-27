import { TestBed } from '@angular/core/testing';

import { HttpSailsPrincipalService } from './http-sails-principal.service';

describe('HttpSailsPrincipalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpSailsPrincipalService = TestBed.get(HttpSailsPrincipalService);
    expect(service).toBeTruthy();
  });
});
