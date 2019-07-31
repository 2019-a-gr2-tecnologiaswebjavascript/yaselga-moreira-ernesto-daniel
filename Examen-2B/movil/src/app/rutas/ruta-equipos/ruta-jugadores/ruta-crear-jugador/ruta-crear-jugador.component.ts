import { Component, OnInit } from '@angular/core';
import {Jugador} from "../../../../dto/jugador";
import {JugadorHttpService} from "../../../../servicios/http/http-jugador.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-ruta-crear-jugador',
  templateUrl: './ruta-crear-jugador.component.html',
  styleUrls: ['./ruta-crear-jugador.component.scss'],
})
export class RutaCrearJugadorComponent implements OnInit {


  idEquipo:number = 0;

  jugador:Jugador = {
      nombre:'',
      nombreCamisa:'',
      poderEspecialDos:'',
      numeroCamisa:0,
      fechaIngresoEquipo:'',
      goles:0,
      fkEquipo: 0,
      precio:0,
  };

  formControl = new FormControl('', [
      Validators.required,
      Validators.min(0),]
  );

  constructor(
      private readonly _jugadorServiceHttp:JugadorHttpService,
      private  readonly _router:Router,
      private readonly _activaRouter:ActivatedRoute
  ) { }

  ngOnInit() {
      const parametro$ = this._activaRouter.params;
      parametro$.subscribe(
          (parametros)=>{
              this.idEquipo = parametros.idEquipo;
              this.jugador.fkEquipo = this.idEquipo;
          }
      )
  }

  crearJugador(formulario){
    if(formulario.invalid){
      return
    }
    this._jugadorServiceHttp.crear(
        this.jugador
    ).subscribe(
        (nuevoJugador)=>{
            console.log("Jugador creado: ",nuevoJugador);
       },
        (error)=>console.log(error),
        ()=>this._router.navigate(['','equipo',this.idEquipo,'jugadores']),
    );

  }

}
