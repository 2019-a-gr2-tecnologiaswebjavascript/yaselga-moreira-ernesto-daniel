import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaHomeComponent } from './ruta-home.component';

describe('RutaHomeComponent', () => {
  let component: RutaHomeComponent;
  let fixture: ComponentFixture<RutaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
