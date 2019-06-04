import { Component, OnInit } from '@angular/core';
import {PlatoService} from "../../../../servcios/plato/plato.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-crear-equipo',
  templateUrl: './crear-plato.component.html',
  styleUrls: ['./crear-plato.component.css']
})
export class CrearPlatoComponent implements OnInit {

  // Atributos del formulario de creacion ng-models
  nombreEquipo: string;
  ligaEquipo: string;
  fechaCreacionEquipo: string;
  numeroCopasInternacionales:number;
  campeonActual:boolean;
  precio:number;
  constructor(private readonly _equipoService:PlatoService, private readonly _router:Router) { }

  ngOnInit() {
  }

  crearEquipo(){
    let equipoNuevo = {
      nombre:this.nombreEquipo,
      liga: this.ligaEquipo,
      fechaCreacion:this.fechaCreacionEquipo,
      numeroCopasInternacionales:this.numeroCopasInternacionales,
      campeonActual:this.campeonActual,
      precio:this.precio,
    };
    this._equipoService.crear(equipoNuevo);
    // redirigir a lista de equipos
    const url = ['/equipos'];
    this._router.navigate(url);
  }
}
