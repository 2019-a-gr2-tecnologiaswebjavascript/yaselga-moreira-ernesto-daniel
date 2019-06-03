import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import {HomeComponent} from "./componentes/home/home.component";
import {EstaLogeadoService} from "../../../03-Rutas/rutas/src/app/servicios/guards/esta-logeado.service";

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,

  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'',
    component:LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
