import { TestBed } from '@angular/core/testing';

import { FacturaService } from './factura.service';

describe('FacturaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FacturaService = TestBed.get(FacturaService);
    expect(service).toBeTruthy();
  });
});
