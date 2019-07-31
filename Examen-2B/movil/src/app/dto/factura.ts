import {Usuario} from "./usuario";
import {Detalle} from "./detalle";

export interface Factura {
    id?:number,
    nombre?:string,
    rucCedula?:string,
    direccion?:string,
    telefono?:string,
    correo?:string,
    total?:number,
    detalles?: Detalle[] | any,
    fkUsuario?:number | Usuario | any
}