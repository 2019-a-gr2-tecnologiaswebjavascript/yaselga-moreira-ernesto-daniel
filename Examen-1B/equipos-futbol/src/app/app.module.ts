import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './rutas/ruta-home/menu.component';
import { PlatoComponent } from './rutas/ruta-home/plato/plato.component';
import { IngredienteComponent } from './rutas/ruta-home/plato/ingrediente/ingrediente.component';
import { ComprasComponent } from './rutas/ruta-home/compras/compras.component';
import { FacturaComponent } from './rutas/ruta-home/factura/factura.component';
import {FormsModule} from "@angular/forms";
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { ProductoItemComponent } from './rutas/ruta-home/compras/producto-item/producto-item.component';
import { CrearPlatoComponent } from './rutas/ruta-home/plato/crear-plato/crear-plato.component';
import { CrearIngredienteComponent } from './rutas/ruta-home/plato/ingrediente/crear-ingrediente/crear-ingrediente.component';

import {MenubarModule} from 'primeng/menubar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RutaNoEncontradaComponent } from './rutas/ruta-no-encontrada/ruta-no-encontrada.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PlatoComponent,
    IngredienteComponent,
    ComprasComponent,
    FacturaComponent,
    RutaLoginComponent,
    ProductoItemComponent,
    CrearPlatoComponent,
    CrearIngredienteComponent,
    RutaNoEncontradaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MenubarModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



