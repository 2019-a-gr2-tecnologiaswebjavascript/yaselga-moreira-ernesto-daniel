import { TestBed } from '@angular/core/testing';

import { PlatoService } from './plato.service';

describe('EquipoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlatoService = TestBed.get(PlatoService);
    expect(service).toBeTruthy();
  });
});
