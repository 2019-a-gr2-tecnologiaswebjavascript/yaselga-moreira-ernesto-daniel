import {Cliente} from "./cliente";
import {ProductoPlato} from "./producto";

export interface Factura {
  id?:number,
  cajero:string,
  cliente:Cliente
  total:number
  productos:ProductoPlato[],
}
