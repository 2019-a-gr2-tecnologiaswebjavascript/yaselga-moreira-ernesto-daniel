import { Component, OnInit } from '@angular/core';
import {Factura} from "../../dto/factura";
import {FacturaHttpService} from "../../servicios/http/htt-factura.service";
import {UsuarioHttpService} from "../../servicios/http/http-usuario.service";
import {Usuario} from "../../dto/usuario";

@Component({
  selector: 'app-compras',
  templateUrl: './compras.page.html',
  styleUrls: ['./compras.page.scss'],
})
export class ComprasPage implements OnInit {


    nombreBusqueda:string ='';
    compras:Factura[]=[];

    constructor(
        private readonly _facturaHttpService:FacturaHttpService,
        private readonly _usaurioHttpService:UsuarioHttpService,
    ) { }

    ionViewWillEnter() {
        console.log("Aqui estoy (compras)");
        this.cargarListaCompras();
    }
    

    buscar(){
        this._facturaHttpService.buscarParametro(
            {
                or: [
                        { nombre:{contains:this.nombreBusqueda} },
                        /*{
                            "fkUsuario.nombre":{contains:this.nombreBusqueda}
                        }*/
                    ]
            }
        ).subscribe(
            (resultados)=>this.compras=resultados,
            (error)=>console.log(error),
        )
    }

    protected cargarListaCompras(){
        this._facturaHttpService.listar().subscribe(
            (facturas)=>this.compras=facturas,
            (error)=>console.log(error),
        )
    }

    ngOnInit() {
    }

}
