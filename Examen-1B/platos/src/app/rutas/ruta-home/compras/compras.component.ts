import { Component, OnInit } from '@angular/core';
import {IngredienteService} from "../../../servcios/ingrediente/ingrediente.service";
import {CompraService} from "../../../servcios/compra/compra.service";
import {AuthService} from "../../../servcios/auth/auth.service";
import {FacturaService} from "../../../servcios/factura/factura.service";
import {Router} from "@angular/router";
import {PlatoService} from "../../../servcios/plato/plato.service";
import {PlatoComponent} from "../plato/plato.component";


@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  platos = this._platoService.equipos;
  total:number =  0;

  nombreCliente:string;
  cedulaRuc: string;
  direccion: string;
  telefono: string;
  correo: string;


  cajero:string = this._authService.cajero;
  compras;

  constructor(
      private readonly _platoService:PlatoService,
      private  readonly _compraService:CompraService,
      private readonly _authService:AuthService,
      private readonly _facturaService:FacturaService,
      private readonly _router:Router,
    ) {
    this._compraService.listaCompras = [];

  }

  agregar(plato){
      console.log(this._compraService.agregarProducto(plato));
      this.total = this._compraService.total;
  }

  quitoProducto(evento:number){
    console.log("se recibio ",evento);
    this.total = evento;
  }

  ngOnInit() {
  }

  generarFactura(formularioCrearFactura: HTMLFormElement) {
      const cliente = {
        nombreCliente:this.nombreCliente,
        cedulaRuc:this.cedulaRuc,
        direccion:this.direccion,
        telefono:this.telefono,
        correo:this.correo,
      };

      if(this._compraService.listaCompras.length==0){
        alert("Por favor ingrese productos!!");
      }else {
        this._facturaService.crearFactura(
          cliente,
          this._compraService.listaCompras,
          this.cajero,
          this.total
        );
        alert("Factura creada con exito");
        console.log(this._facturaService.facturas);
        const url = ['/facturas'];
        this._router.navigate(url);
      }
  }
}
