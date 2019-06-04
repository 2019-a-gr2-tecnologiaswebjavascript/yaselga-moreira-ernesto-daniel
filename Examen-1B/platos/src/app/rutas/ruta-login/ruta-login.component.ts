import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../servcios/auth/auth.service";

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.css']
})
export class RutaLoginComponent implements OnInit {

  ngOnInit() {
  }

  nombre:string;
  constructor(private readonly _authService:AuthService){}

  guardarCajero(formulario){
    console.log(formulario);
    const nombre = formulario.controls.nombre.value;
    console.log(this.nombre);
    /*alert('Esta entrando al sistema');*/
    this._authService.login(nombre);
  }

}
