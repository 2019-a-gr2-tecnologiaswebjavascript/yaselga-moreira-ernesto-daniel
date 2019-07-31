import {Equipo} from "./equipo";

export interface Jugador {
    id?:number,
    nombre?:string,
    nombreCamisa?:string,
    poderEspecialDos?:string,
    numeroCamisa?:number,
    fechaIngresoEquipo?:string,
    goles?:number,
    precio?:number,
    fkEquipo?: number | Equipo | any,
    fkFactura?:number | any
}