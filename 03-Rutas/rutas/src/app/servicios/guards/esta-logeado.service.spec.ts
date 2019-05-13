import { TestBed } from '@angular/core/testing';

import { EstaLogeadoService } from './esta-logeado.service';

describe('EstaLogeadoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstaLogeadoService = TestBed.get(EstaLogeadoService);
    expect(service).toBeTruthy();
  });
});
