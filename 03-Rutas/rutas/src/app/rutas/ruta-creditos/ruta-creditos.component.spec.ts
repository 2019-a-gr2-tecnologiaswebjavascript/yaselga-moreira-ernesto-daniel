import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCreditosComponent } from './ruta-creditos.component';

describe('RutaCreditosComponent', () => {
  let component: RutaCreditosComponent;
  let fixture: ComponentFixture<RutaCreditosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCreditosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCreditosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
