import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaComprasComponent } from './ruta-compras.component';

describe('RutaComprasComponent', () => {
  let component: RutaComprasComponent;
  let fixture: ComponentFixture<RutaComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaComprasComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
