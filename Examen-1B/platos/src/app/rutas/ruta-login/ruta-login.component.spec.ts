import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaLoginComponent } from './ruta-login.component';

describe('RutaLoginComponent', () => {
  let component: RutaLoginComponent;
  let fixture: ComponentFixture<RutaLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
