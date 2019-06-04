import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { AlbumItemComponent } from './album-item/album-item.component';
import { PaginaAlbumHeaderComponent } from './paginaAlbum/pagina-album-header/pagina-album-header.component';
import { PaginaAlbumListComponent } from './paginaAlbum/pagina-album-list/pagina-album-list.component';
import { PaginaAlbumDownloadZoneComponent } from './paginaAlbum/pagina-album-download-zone/pagina-album-download-zone.component';
import { PaginaAlbumComponent } from './paginaAlbum/pagina-album/pagina-album.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarruselComponent,
    AlbumItemComponent,
    PaginaAlbumHeaderComponent,
    PaginaAlbumListComponent,
    PaginaAlbumDownloadZoneComponent,
    PaginaAlbumComponent,
    PaginaPrincipalComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
