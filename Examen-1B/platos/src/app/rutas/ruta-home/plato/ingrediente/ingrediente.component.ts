import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IngredienteService} from "../../../../servcios/ingrediente/ingrediente.service";

@Component({
  selector: 'app-jugador',
  templateUrl: './ingrediente.component.html',
  styleUrls: ['./ingrediente.component.css']
})
export class IngredienteComponent implements OnInit, OnDestroy {

  constructor(private readonly _activateRoute:ActivatedRoute, private readonly _jugadorService:IngredienteService ) {
    //console.log("El constructor");
    //this.ingredientes = this._jugadorService.obtenerJugadores(this.idEquipo);
  }

  idPlato:number;
  ingredientes;
  nombreIngrediente:string;
  route = this._activateRoute;


  ngOnInit() {
    console.log("Se ha iniciado");
    const parametros$ = this._activateRoute.params;
    parametros$.subscribe( // Estamos suscritos a esos cambios
      (parametros)=>{ // Ok TRY
        console.log('Parametros: ', parametros); //Para los parametros de ruta
        this.idPlato = +parametros.idEquipo;
        this.ingredientes = this._jugadorService.obtenerJugadores(this.idPlato);
      },(error)=>{ // :( CATCH
        console.log('Error: ', error);
      },
      ()=>{ // Completado FINALLY -> OPCIONAL
        console.log('completo');
      }
    );

  }

  ngOnDestroy(){

  }

  obtenerJugadores(){
    return this._jugadorService.obtenerJugadores(this.idPlato);
  }


  buscarIngredientes(formulario){
    //const nombre = formulario.controls.nombreCamiseta.value;
    console.log(this.nombreIngrediente);
    //this.ingredientes= this._jugadorService.buscarJugador(nombre);
    if(this.nombreIngrediente){
      console.log("Entro aqui");
      this.ingredientes = this._jugadorService.buscarJugador(this.nombreIngrediente);
    }else {
      console.log("Nope");
      this.ingredientes = this._jugadorService.obtenerJugadores(this.idPlato);
    }
  }

  borrarIngredientes(idJugador:number){
    this._jugadorService.borrarJugador(idJugador);
    this.ingredientes = this._jugadorService.obtenerJugadores(this.idPlato);
  }



}
