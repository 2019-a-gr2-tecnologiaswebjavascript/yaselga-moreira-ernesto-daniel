import {Jugador} from "./jugador";
import {Factura} from "./factura";

export interface Detalle {
    fkJugador:Jugador | number | any,
    fkFactura?:Factura | number | any,
    cantidad:number,
}