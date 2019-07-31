import { Component, OnInit } from '@angular/core';
import {Equipo} from "../../dto/equipo";
import {EquipoHttpService} from "../../servicios/http/http-equipo.service";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.page.html',
  styleUrls: ['./equipos.page.scss'],
})
export class EquiposPage implements OnInit {
    equipos:Equipo[]=[];
    nombreBusqueda:string='';


    constructor(
        private readonly _equipoHttpService:EquipoHttpService,
        public alertController: AlertController,
    ) {
        //this.cargarListaEquipos();
    }

    ngOnInit() {    }

    ionViewWillEnter() {
        console.log("Aqui estoy");
        this.cargarListaEquipos();
    }

    buscar(){
        this._equipoHttpService.buscarParametro(
            {nombre:{contains:this.nombreBusqueda}}
        ).subscribe(
            (resultados)=>this.equipos = resultados,
            (error) => console.log(error),
        )
    }


    cargarListaEquipos(){
        this._equipoHttpService.listar().subscribe(
            (equipos)=>{
                this.equipos = equipos;
            },
            (error)=>{
                console.log(error);
            }
        )
    }

    async presentarAlertaEliminar(equipo:Equipo) {
        const alert = await this.alertController.create({
            header: 'Eliminar Equipo!',
            message: `¿Desea Eliminar el Equipo: ${equipo.nombre}?`,
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
                        this.eliminarEquipo(equipo.id)
                    }
                }
            ]
        });

        await alert.present();
    }

    protected eliminarEquipo(id:number){
        this._equipoHttpService.borrar(
            id
        ).subscribe(
            (borrado)=>{
                console.log(borrado)
            },
            (error)=>console.log(error),
            ()=>this.cargarListaEquipos()
        );
    }

}
