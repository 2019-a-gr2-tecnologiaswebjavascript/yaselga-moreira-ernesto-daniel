import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaProductosHogarComponent } from './ruta-productos-hogar.component';

describe('RutaProductosHogarComponent', () => {
  let component: RutaProductosHogarComponent;
  let fixture: ComponentFixture<RutaProductosHogarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaProductosHogarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaProductosHogarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
