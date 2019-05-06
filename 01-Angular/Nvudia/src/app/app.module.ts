import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { NavbarComponent } from './navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SeccionComponent } from './seccion/seccion.component';
import { SeccionItemComponent } from './seccion-item/seccion-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    NavbarComponent,
    SeccionComponent,
    SeccionItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
