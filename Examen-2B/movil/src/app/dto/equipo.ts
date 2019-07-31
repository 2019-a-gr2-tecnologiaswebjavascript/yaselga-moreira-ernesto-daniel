import {Jugador} from "./jugador";

export interface Equipo {
    id?:number,
    nombre?:string,
    liga?:string,
    fechaCreacion?:string,
    copasInt?:number,
    campeonAct?:boolean,
    jugadores?:any | number | Jugador[],
}