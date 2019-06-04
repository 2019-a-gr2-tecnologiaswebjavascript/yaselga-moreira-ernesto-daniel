import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PaginaAlbumComponent } from './paginaAlbum/pagina-album/pagina-album.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';

const routes: Routes = [
  {
    path:'home',
    component:PaginaPrincipalComponent
  },
  {
    path:'album/:nombre',
    component:PaginaAlbumComponent,
    /*canActivate:[
      EstaLogeadoService
    ]*/
  },
  {
    path:'**',
    component:PaginaPrincipalComponent
  } 
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  

}
