import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  estaLogeado: boolean = false;
  cajero:string = "Invitado";
  constructor(private readonly _router:Router) {}

  login(usuario:string){
      this.estaLogeado = true;
      const url = ['/home'];
      this.cajero = usuario;
      this._router.navigate(url);
      return true;
  }
}
