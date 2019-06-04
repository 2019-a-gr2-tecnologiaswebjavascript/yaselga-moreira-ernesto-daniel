import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAlbumHeaderComponent } from './pagina-album-header.component';

describe('PaginaAlbumHeaderComponent', () => {
  let component: PaginaAlbumHeaderComponent;
  let fixture: ComponentFixture<PaginaAlbumHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaAlbumHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaAlbumHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
