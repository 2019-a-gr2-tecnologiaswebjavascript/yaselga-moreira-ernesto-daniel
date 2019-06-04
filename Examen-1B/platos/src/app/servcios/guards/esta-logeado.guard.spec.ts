import { TestBed, async, inject } from '@angular/core/testing';

import { EstaLogeadoGuard } from './esta-logeado.guard';

describe('EstaLogeadoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstaLogeadoGuard]
    });
  });

  it('should ...', inject([EstaLogeadoGuard], (guard: EstaLogeadoGuard) => {
    expect(guard).toBeTruthy();
  }));
});
