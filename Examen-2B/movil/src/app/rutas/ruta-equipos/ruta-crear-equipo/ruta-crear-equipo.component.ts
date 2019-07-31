import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {EquipoHttpService} from "../../../servicios/http/http-equipo.service";
import {Equipo} from "../../../dto/equipo";
import {FormControl, Validators} from "@angular/forms";
import {NavController} from "@ionic/angular";
import {RutaEquiposComponent} from "../ruta-equipos.component";

@Component({
  selector: 'app-ruta-crear-equipo',
  templateUrl: './ruta-crear-equipo.component.html',
  styleUrls: ['./ruta-crear-equipo.component.scss'],
})
export class RutaCrearEquipoComponent implements OnInit {

    formControl = new FormControl('', [
        Validators.required,
        Validators.min(0),
    ]);

    equipo:Equipo={nombre:'',campeonAct:false,copasInt:0,fechaCreacion:'',liga:'',};
    constructor(
        private readonly _equipoHttpService:EquipoHttpService,
        private readonly _router:Router,
        public navCtrl: NavController
    ) { }

    crearEquipo(formulario){
          if(formulario.invalid){
            return
        }
        this._equipoHttpService.crear(
            this.equipo
        ).subscribe(
            (nuevo)=>console.log("Equipo creado: ",nuevo),
            (error)=>console.log(error),
             ()=> {
                this._router.navigateByUrl('/equipos');
                 //this.navCtrl.navigateForward('/equipos')
                //this.navCtrl.push(RutaEquiposComponent);
            }
        );
    }

  ngOnInit() {}

}
