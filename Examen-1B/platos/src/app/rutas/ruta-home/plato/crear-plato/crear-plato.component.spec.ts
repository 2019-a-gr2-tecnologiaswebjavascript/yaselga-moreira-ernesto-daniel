import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPlatoComponent } from './crear-plato.component';

describe('CrearEquipoComponent', () => {
  let component: CrearPlatoComponent;
  let fixture: ComponentFixture<CrearPlatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPlatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPlatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
