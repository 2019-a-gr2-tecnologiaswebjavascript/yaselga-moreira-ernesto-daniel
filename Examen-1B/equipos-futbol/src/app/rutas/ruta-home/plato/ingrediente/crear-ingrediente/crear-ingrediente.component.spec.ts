import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearIngredienteComponent } from './crear-ingrediente.component';

describe('CrearJugadorComponent', () => {
  let component: CrearIngredienteComponent;
  let fixture: ComponentFixture<CrearIngredienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearIngredienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearIngredienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
