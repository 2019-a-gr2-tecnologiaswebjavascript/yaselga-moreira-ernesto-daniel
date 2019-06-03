import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarHijosComponent } from './administrar-hijos.component';

describe('AdministrarHijosComponent', () => {
  let component: AdministrarHijosComponent;
  let fixture: ComponentFixture<AdministrarHijosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrarHijosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarHijosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
