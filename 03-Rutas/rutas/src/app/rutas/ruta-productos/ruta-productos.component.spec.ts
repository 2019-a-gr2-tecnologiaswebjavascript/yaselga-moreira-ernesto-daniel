import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaProductosComponent } from './ruta-productos.component';

describe('RutaProductosComponent', () => {
  let component: RutaProductosComponent;
  let fixture: ComponentFixture<RutaProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
