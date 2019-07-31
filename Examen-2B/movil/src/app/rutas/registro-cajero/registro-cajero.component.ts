import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../dto/usuario";
import {FormControl, Validators} from "@angular/forms";
import {ToastController} from "@ionic/angular";
import {UsuarioHttpService} from "../../servicios/http/http-usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registro-cajero',
  templateUrl: './registro-cajero.component.html',
  styleUrls: ['./registro-cajero.component.scss'],
})
export class RegistroCajeroComponent implements OnInit {

    cajero:Usuario={correo:'',clave:'',nombre:''};

    constructor(
        public toastController: ToastController,
        private readonly _usuarioHttpService:UsuarioHttpService,
        private readonly _router:Router,
    ) { }
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);
    nombreClaveFormControl = new FormControl('', [
        Validators.required,
    ]);
    ngOnInit() {}
    registrarCajero(){
        console.log("Se registrara: ",this.cajero);
        this._usuarioHttpService.crear(
            this.cajero
        ).subscribe(
            (nuevoCajero)=>{
                console.log(nuevoCajero);
                const mensaje =this.mostrarMensaje('Cajero creado');
                this._router.navigate(['/login']);
            },
            (error)=>{
                const mensaje = this.mostrarMensaje(error.mensaje)
            }
        );
    }

     protected async mostrarMensaje(mensaje:string) {
        const toast = await this.toastController.create({
            message: mensaje,
            duration: 2000,
            position:'top',
        });
        toast.present();
    }
}
