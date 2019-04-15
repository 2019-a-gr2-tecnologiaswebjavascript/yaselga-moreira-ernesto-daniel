import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarCarritoComponent } from './mostrar-carrito.component';

describe('MostrarCarritoComponent', () => {
  let component: MostrarCarritoComponent;
  let fixture: ComponentFixture<MostrarCarritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarCarritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
