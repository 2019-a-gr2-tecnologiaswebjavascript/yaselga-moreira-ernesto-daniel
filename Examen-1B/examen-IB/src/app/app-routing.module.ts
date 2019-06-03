import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { AdministrarComponent } from './administrar/administrar.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"menu",
    component:MenuPrincipalComponent
  },
  {
    path:"administrar-padre",
    component:AdministrarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
