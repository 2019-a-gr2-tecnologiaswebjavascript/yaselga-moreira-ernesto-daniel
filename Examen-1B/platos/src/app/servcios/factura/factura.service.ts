import { Injectable } from '@angular/core';
import {Factura} from "../../interfaces/factura";
import {Cliente} from "../../interfaces/cliente";
import {ProductoPlato} from "../../interfaces/producto";

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  facturas:Factura[]= [];
  constructor() { }

  crearFactura(cliente:Cliente, productos:ProductoPlato[], cajero:string, total:number){
    const factura ={
       id:this.obtenerUltimoId(),
       cliente:cliente,
       cajero:cajero,
       total:total,
       productos:productos,
    };
    this.facturas.push(factura);
  }

  buscarFactura(valor:string):Factura[]{
    return this.facturas.filter(
      (factura)=>{
          return factura.cliente.nombreCliente === valor || factura.cajero === valor;
      }
    )
  }

  protected obtenerUltimoId():number{
    return this.facturas.length>0? this.facturas.length -1 : 0;
  }

}
