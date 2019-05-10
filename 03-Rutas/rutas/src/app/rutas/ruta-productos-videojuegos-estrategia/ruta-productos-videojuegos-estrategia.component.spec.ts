import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaProductosVideojuegosEstrategiaComponent } from './ruta-productos-videojuegos-estrategia.component';

describe('RutaProductosVideojuegosEstrategiaComponent', () => {
  let component: RutaProductosVideojuegosEstrategiaComponent;
  let fixture: ComponentFixture<RutaProductosVideojuegosEstrategiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaProductosVideojuegosEstrategiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaProductosVideojuegosEstrategiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
