import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  estaLogeado: boolean = false;
  constructor(private readonly _router:Router) { }

  login(password:string, usuario:string){
    if(usuario){
      this.estaLogeado=true;
      //const url = ['/creditos','1','1'];
      /*const parametros = {
        queryParams:{
        nombre:'Ernesto',
        apellido:'Yaselga',
        edad: 22}
      }*/
      //this._router.navigate(url,parametros);
      return true;
    }else{
      return false;
    }
  }
  logout(){
    this.estaLogeado = false;
  }
  status(){
    if(this.estaLogeado){
      return true;
    }else{
      return false;
    }
  }
}
