import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAlbumListComponent } from './pagina-album-list.component';

describe('PaginaAlbumListComponent', () => {
  let component: PaginaAlbumListComponent;
  let fixture: ComponentFixture<PaginaAlbumListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaAlbumListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaAlbumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
