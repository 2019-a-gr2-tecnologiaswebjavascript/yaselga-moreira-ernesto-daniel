import { Injectable } from '@angular/core';
import { EstaLogeadoService } from '../guards/esta-logeado.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  estaLogeado: boolean = false;
  constructor(private readonly _router:Router) { }

  login(password:string, usuario:string){
    if(password=='1234' && usuario == 'ernesto'){
      this.estaLogeado=true;
      const url = ['/creditos','1','1'];
      
      const parametros = {
        queryParams:{
        nombre:'Ernesto',
        apellido:'Yaselga',
        edad: 22}
      }
      this._router.navigate(url,parametros);
      return true;
    }else{
      return false;
    }
  }
  logout(){
    this.estaLogeado = false;
  }
}
