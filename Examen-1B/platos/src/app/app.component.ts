import {Component, OnInit} from '@angular/core';
import {AuthService} from "./servcios/auth/auth.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'equipos-futbol';
  itemsLogeado =  [];
  itemsNoLogeado = [];
  estaLogedo = this._authService.estaLogeado;

  constructor(private readonly _authService:AuthService){}
  getEstaLogeado():boolean{
    return this._authService.estaLogeado;
  }

  getNombreCajero(){
    return this._authService.cajero;
  }

  ngOnInit(){

  }


}

