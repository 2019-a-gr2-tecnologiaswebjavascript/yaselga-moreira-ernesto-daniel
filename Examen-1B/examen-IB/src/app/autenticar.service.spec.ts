import { TestBed } from '@angular/core/testing';

import { AutenticarService } from './autenticar.service';

describe('AutenticarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutenticarService = TestBed.get(AutenticarService);
    expect(service).toBeTruthy();
  });
});
