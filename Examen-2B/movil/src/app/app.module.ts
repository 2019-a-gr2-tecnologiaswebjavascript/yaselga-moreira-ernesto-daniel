import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {RegistroCajeroComponent} from "./rutas/registro-cajero/registro-cajero.component";
import {LoginCajeroComponent} from "./rutas/login-cajero/login-cajero.component";
import {RutaEquiposComponent} from "./rutas/ruta-equipos/ruta-equipos.component";
import {RutaCrearEquipoComponent} from "./rutas/ruta-equipos/ruta-crear-equipo/ruta-crear-equipo.component";
import {RutaActualizarEquipoComponent} from "./rutas/ruta-equipos/ruta-actualizar-equipo/ruta-actualizar-equipo.component";
import {RutaJugadoresComponent} from "./rutas/ruta-equipos/ruta-jugadores/ruta-jugadores.component";
import {RutaCrearJugadorComponent} from "./rutas/ruta-equipos/ruta-jugadores/ruta-crear-jugador/ruta-crear-jugador.component";
import {RutaActualizarJugadorComponent} from "./rutas/ruta-equipos/ruta-jugadores/ruta-actualizar-jugador/ruta-actualizar-jugador.component";
import {RutaComprarComponent} from "./rutas/ruta-comprar/ruta-comprar.component";
import {RutaComprasComponent} from "./rutas/ruta-compras/ruta-compras.component";
import {UsuarioHttpService} from "./servicios/http/http-usuario.service";
import {AuthHttpService} from "./servicios/http/http-auth.service";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from "@angular/common/http";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {EquipoHttpService} from "./servicios/http/http-equipo.service";
import {MatNativeDateModule} from "@angular/material";
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {JugadorHttpService} from "./servicios/http/http-jugador.service";
import {CarritoComprasService} from "./servicios/carrito/carrito-compras.service";
import {FacturaHttpService} from "./servicios/http/htt-factura.service";
import {DetalleHttpService} from "./servicios/http/http-detalle.service";



@NgModule({
  declarations: [
      AppComponent,
      RegistroCajeroComponent,
      LoginCajeroComponent,
      RutaEquiposComponent,
      RutaCrearEquipoComponent,
      RutaActualizarEquipoComponent,
      RutaJugadoresComponent,
      RutaCrearJugadorComponent,
      RutaActualizarJugadorComponent,
      RutaComprarComponent,
      RutaComprasComponent,
  ],
  entryComponents: [],
  imports: [
      BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      FormsModule,
      BrowserAnimationsModule,
      MatInputModule,
      ReactiveFormsModule,
      MatButtonModule,
      HttpClientModule,
      MatDatepickerModule,
      MatRadioModule,
      MatNativeDateModule,
      MatMenuModule,
      MatIconModule
  ],
  providers: [
      StatusBar,
      SplashScreen,
      UsuarioHttpService,
      AuthHttpService,
      EquipoHttpService,
      JugadorHttpService,
      MatDatepickerModule,
      CarritoComprasService,
      FacturaHttpService,
      DetalleHttpService,
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
