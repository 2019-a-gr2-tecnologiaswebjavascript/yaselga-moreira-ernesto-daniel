import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemBannerComponent } from './item-banner/item-banner.component';
import { SeccionComponent } from './seccion/seccion.component';
import { SeccionTileComponent } from './seccion-tile/seccion-tile.component';
import { BannerComponent } from './banner/banner.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BannerPrincipal } from './banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemBannerComponent,
    SeccionComponent,
    SeccionTileComponent,
    BannerComponent,
    BannerPrincipal
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  exports: [BannerPrincipal],
  bootstrap: [AppComponent,BannerPrincipal]
})
export class AppModule { }
