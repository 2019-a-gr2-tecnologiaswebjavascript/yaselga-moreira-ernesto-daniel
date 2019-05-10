import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import { RutaCreditosComponent } from './rutas/ruta-creditos/ruta-creditos.component';
import { RutaProductosComponent } from './rutas/ruta-productos/ruta-productos.component';
import { RutaNoEncontradaComponent } from './rutas/ruta-no-encontrada/ruta-no-encontrada.component';
import { RutaProductosHogarComponent } from './rutas/ruta-productos-hogar/ruta-productos-hogar.component';
import { RutaProductosVideojuegosComponent } from './rutas/ruta-productos-videojuegos/ruta-productos-videojuegos.component';
import { RutaProductosVideojuegosAccionComponent } from './rutas/ruta-productos-videojuegos-accion/ruta-productos-videojuegos-accion.component';
import { RutaProductosVideojuegosEstrategiaComponent } from './rutas/ruta-productos-videojuegos-estrategia/ruta-productos-videojuegos-estrategia.component';

const routes: Routes = [
  {
    path:'home/app',
    component:RutaHomeComponent
  },
  {
    path:'creditos/:idCredito/:tasa',
    component:RutaCreditosComponent
  },
  {
    path:'productos',
    component:RutaProductosComponent,
    children:[
      {
        path:'hogar',
        component:RutaProductosHogarComponent
      },
      {
        path:'videojuegos',
        component:RutaProductosVideojuegosComponent,
        children:[
          {
            path:'accion',
            component:RutaProductosVideojuegosAccionComponent
          },
          {
            path:'estrategia',
            component:RutaProductosVideojuegosEstrategiaComponent
          }
        ]
      }  
    ]
  },
  {
    path:'404',
    component:RutaNoEncontradaComponent
  },
  {
    path:'',
    redirectTo:'home/app',
    pathMatch: 'full'
  },{
    path:'**',
    component:RutaNoEncontradaComponent
  } 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{
      useHash:true
    })
    
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
