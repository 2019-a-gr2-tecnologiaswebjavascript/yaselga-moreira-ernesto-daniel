import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAlbumComponent } from './pagina-album.component';

describe('PaginaAlbumComponent', () => {
  let component: PaginaAlbumComponent;
  let fixture: ComponentFixture<PaginaAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
