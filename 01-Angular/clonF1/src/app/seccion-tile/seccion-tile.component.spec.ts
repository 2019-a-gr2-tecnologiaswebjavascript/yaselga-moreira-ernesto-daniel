import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionTileComponent } from './seccion-tile.component';

describe('SeccionTileComponent', () => {
  let component: SeccionTileComponent;
  let fixture: ComponentFixture<SeccionTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
