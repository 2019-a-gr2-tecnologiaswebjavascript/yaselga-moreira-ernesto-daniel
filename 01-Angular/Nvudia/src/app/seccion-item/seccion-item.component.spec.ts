import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionItemComponent } from './seccion-item.component';

describe('SeccionItemComponent', () => {
  let component: SeccionItemComponent;
  let fixture: ComponentFixture<SeccionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
