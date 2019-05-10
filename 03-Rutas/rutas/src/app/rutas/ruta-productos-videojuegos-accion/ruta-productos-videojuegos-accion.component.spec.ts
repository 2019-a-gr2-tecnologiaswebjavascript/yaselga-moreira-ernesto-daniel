import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaProductosVideojuegosAccionComponent } from './ruta-productos-videojuegos-accion.component';

describe('RutaProductosVideojuegosAccionComponent', () => {
  let component: RutaProductosVideojuegosAccionComponent;
  let fixture: ComponentFixture<RutaProductosVideojuegosAccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaProductosVideojuegosAccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaProductosVideojuegosAccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
