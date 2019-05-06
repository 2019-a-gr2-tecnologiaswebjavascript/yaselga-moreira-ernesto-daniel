import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBannerComponent } from './item-banner.component';

describe('ItemBannerComponent', () => {
  let component: ItemBannerComponent;
  let fixture: ComponentFixture<ItemBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
