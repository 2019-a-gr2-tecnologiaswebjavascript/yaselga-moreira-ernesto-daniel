import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaProductosVideojuegosComponent } from './ruta-productos-videojuegos.component';

describe('RutaProductosVideojuegosComponent', () => {
  let component: RutaProductosVideojuegosComponent;
  let fixture: ComponentFixture<RutaProductosVideojuegosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaProductosVideojuegosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaProductosVideojuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
