import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly _router:Router) { }

  usuario:string = "invitado";
  estadLogeado:boolean = false;

  login(usuario: string){
    this.estadLogeado=true;
    const url = ["/home"];
    this.usuario = usuario;
    this._router.navigate(url);
    return true;
}
}
