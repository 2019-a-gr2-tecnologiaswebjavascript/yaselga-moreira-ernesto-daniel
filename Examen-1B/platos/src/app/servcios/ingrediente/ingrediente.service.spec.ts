import { TestBed } from '@angular/core/testing';

import { IngredienteService } from './ingrediente.service';

describe('JugadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IngredienteService = TestBed.get(IngredienteService);
    expect(service).toBeTruthy();
  });
});
