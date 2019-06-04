import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IngredienteService} from "../../../../../servcios/ingrediente/ingrediente.service";
import {IngredienteComponent} from "../ingrediente.component";

@Component({
  selector: 'app-crear-jugador',
  templateUrl: './crear-ingrediente.component.html',
  styleUrls: ['./crear-ingrediente.component.css']
})
export class CrearIngredienteComponent implements OnInit {
  idEquipo:number;
  jugadores;

  // ngModels del formulario
  nombreCompletoJugador:string;
  fechaIngreso: string;
  goles:boolean;
  poderEspecial: boolean;
  nombreCamiseta:string;
  ncamiseta:number;
  precioJugador: number;

  constructor(
    private readonly _jugadorService:IngredienteService,
    private readonly _router:Router,
    //private padre: JugadorComponent,
    private readonly _activateRoute:ActivatedRoute,

  ) {
    //console.log("PADRE: ",padre.route.snapshot.params['idEquipo']);
    //this.idEquipo = +padre.route.snapshot.params['idEquipo']
  }

  ngOnInit() {
    console.log("Se ha iniciado");
    const parametros$ = this._activateRoute.params;
    parametros$.subscribe( // Estamos suscritos a esos cambios
      (parametros)=>{ // Ok TRY
        console.log('Parametros: ', parametros); //Para los parametros de ruta
        this.idEquipo = +parametros.idEquipo;
        this.jugadores = this._jugadorService.obtenerJugadores(this.idEquipo);
      },(error)=>{ // :( CATCH
        console.log('Error: ', error);
      },
      ()=>{ // Completado FINALLY -> OPCIONAL
        console.log('completo');
      }
    );

  }

  crearJugador(){

    let jugadorNuevo={
      idEquipo:this.idEquipo,
      numeroCamiseta:this.ncamiseta,
      nombreCamiseta:this.nombreCamiseta,
      nombreCompletoJugador: this.nombreCompletoJugador,
      poderEspecialDos:this.poderEspecial,
      fechaIngresoEquipo:this.fechaIngreso,
      goles:this.goles,
      precio:this.precioJugador
    };
    this._jugadorService.crearJugador(jugadorNuevo);
    //this.ingredientes = this._jugadorService.obtenerJugadores(this.idEquipo);

    const url = ['/equipo',this.idEquipo,'jugadores'];
    this._router.navigate(url);
  }

}
