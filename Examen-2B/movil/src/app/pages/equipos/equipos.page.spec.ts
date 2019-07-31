import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposPage } from './equipos.page';

describe('EquiposPage', () => {
  let component: EquiposPage;
  let fixture: ComponentFixture<EquiposPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquiposPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquiposPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
