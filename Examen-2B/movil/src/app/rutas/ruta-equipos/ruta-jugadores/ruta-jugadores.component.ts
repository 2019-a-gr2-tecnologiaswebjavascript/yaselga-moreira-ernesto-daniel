import { Component, OnInit } from '@angular/core';
import {Jugador} from "../../../dto/jugador";
import {ActivatedRoute} from "@angular/router";
import {AlertController} from "@ionic/angular";
import {JugadorHttpService} from "../../../servicios/http/http-jugador.service";
import {Equipo} from "../../../dto/equipo";
import {EquipoHttpService} from "../../../servicios/http/http-equipo.service";

@Component({
  selector: 'app-ruta-jugadores',
  templateUrl: './ruta-jugadores.component.html',
  styleUrls: ['./ruta-jugadores.component.scss'],
})
export class RutaJugadoresComponent implements OnInit {

  jugadores:Jugador[]=[];
  nombreBusqueda:string='';
  idEquipo:number=0;

  equipo:Equipo={id:0,nombre:'',campeonAct:false,copasInt:0,fechaCreacion:'',liga:'',};
  constructor(
        private readonly _jugadorHttoService:JugadorHttpService,
        private readonly  _activateRoute:ActivatedRoute,
        private  readonly _equipoHttpService:EquipoHttpService,
        public alertController: AlertController,
  ) {
  }

  ngOnInit() {
      const parametros$ = this._activateRoute.params;
      parametros$.subscribe(
          (parametros)=>{
              this.idEquipo = parametros.idEquipo;
              this.cargarJugadores();
              this.recuperarEquipo();
          }
      )
  }


    protected recuperarEquipo(){
          this._equipoHttpService.buscar(
              this.idEquipo
          ).subscribe(
              (equipo)=>this.equipo=equipo,
              (error)=>console.log(error),
          )
    }

    buscar(){
        this._jugadorHttoService.buscarParametro(
            {nombre:{contains:this.nombreBusqueda},fkEquipo:this.idEquipo}
        ).subscribe(
            (resultados)=>this.jugadores = resultados,
            (error) => console.log(error),
        );
    }


    protected cargarJugadores(){
        this._jugadorHttoService.buscarParametro(
            {fkEquipo:this.idEquipo}
        ).subscribe(
            (jugadores)=>{
                this.jugadores = jugadores;
            },
            (error)=>{
                console.log(error);
            }
        )
    }

    async presentarAlertaEliminar(jugador:Jugador) {
        const alert = await this.alertController.create({
            header: 'Eliminar Jugador!',
            message: `¿Desea eliminar al jugador: ${jugador.nombre}?`,
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (mensaje) => {
                        console.log(mensaje);
                    }
                }, {
                    text: 'SI',
                    handler: () => {
                        this.eliminarEquipo(jugador.id)
                    }
                }
            ]
        });

        await alert.present();
    }

    protected eliminarEquipo(id:number){
        this._jugadorHttoService.borrar(
            id
        ).subscribe(
            (borrado)=>{
                console.log(borrado)
            },
            (error)=>console.log(error),
            ()=>this.cargarJugadores()
        );
    }

}
