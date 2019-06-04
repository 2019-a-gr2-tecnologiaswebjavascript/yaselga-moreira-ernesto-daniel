import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAlbumDownloadZoneComponent } from './pagina-album-download-zone.component';

describe('PaginaAlbumDownloadZoneComponent', () => {
  let component: PaginaAlbumDownloadZoneComponent;
  let fixture: ComponentFixture<PaginaAlbumDownloadZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaAlbumDownloadZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaAlbumDownloadZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
