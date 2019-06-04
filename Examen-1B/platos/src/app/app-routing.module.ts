import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from "./rutas/ruta-home/menu.component";
import {PlatoComponent} from "./rutas/ruta-home/plato/plato.component";
import {IngredienteComponent} from "./rutas/ruta-home/plato/ingrediente/ingrediente.component";
import {ComprasComponent} from "./rutas/ruta-home/compras/compras.component";
import {FacturaComponent} from "./rutas/ruta-home/factura/factura.component";
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {CrearPlatoComponent} from "./rutas/ruta-home/plato/crear-plato/crear-plato.component";
import {CrearIngredienteComponent} from "./rutas/ruta-home/plato/ingrediente/crear-ingrediente/crear-ingrediente.component";
import {EstaLogeadoGuard} from "./servcios/guards/esta-logeado.guard";
import {RutaNoEncontradaComponent} from "./rutas/ruta-no-encontrada/ruta-no-encontrada.component";

const routes: Routes = [
  {
    path:'home',
    component:MenuComponent,
    canActivate:[
      EstaLogeadoGuard
    ]
  },
  {
    path:'login',
    component:RutaLoginComponent,
  },
  {
    path:'platos',
    component:PlatoComponent,
    canActivate:[
      EstaLogeadoGuard
    ]
  },
  {
    path:'crear-plato',
    component:CrearPlatoComponent,
    canActivate:[
      EstaLogeadoGuard
    ]
  },
  {
    path:'plato/:idEquipo/ingredientes',
    component:IngredienteComponent,
    canActivate:[
      EstaLogeadoGuard
    ],/*
    children:[
      {
        path:'crear',
        component:CrearJugadorComponent,
        canActivate:[
          EstaLogeadoGuard
        ]
      },
    ]*/
  },
  {
    path:'crear/:idEquipo',
    component:CrearIngredienteComponent,
    canActivate:[
      EstaLogeadoGuard
    ]
  },

  {
    path:'compras',
    component:ComprasComponent,
    canActivate:[
      EstaLogeadoGuard
    ]
  },
  {
    path:'facturas',
    component:FacturaComponent,
    canActivate:[
      EstaLogeadoGuard
    ]
  },
  {
    path:'',
    redirectTo:'',
    pathMatch:'full'
  },
  {
    path:'**',
    component: RutaNoEncontradaComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
