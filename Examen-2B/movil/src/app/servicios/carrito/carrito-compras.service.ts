import {Injectable} from "@angular/core";
import {Detalle} from "../../dto/detalle";
import {Jugador} from "../../dto/jugador";


@Injectable()
export class CarritoComprasService {

    detalles:Detalle[]=[];
    listaGeneral:Jugador[]=[];

    total:number=0;

    constructor() {}


    agregarCarrito(jugadorNuevo:Jugador){
        // Ver si exite
        const existe = this.listaGeneral.some(
            (jugador,index)=>{
                if(jugador.id == jugadorNuevo.id){
                    // Si existe agregar unidad;
                    return true;
                }else{
                    return false;
                }
            }
        );
        // Si existe aumentar
        if(existe){
            const indiceDetalle = this.detalles.findIndex(
                (detalle)=>{
                    return detalle.fkJugador == jugadorNuevo
                }
            );
            this.agregarUnidadDetalle(indiceDetalle);
        }else {
            this.listaGeneral.push(jugadorNuevo);
            this.agregarNuevaLineaDetalle(
                {
                    cantidad:1,
                    fkJugador:jugadorNuevo,
                }
            );
        }
        this.calcularTotal();
    }

    agregarNuevaLineaDetalle(detalle:Detalle){
        this.detalles.push(detalle);
    }

    agregarUnidadDetalle(indice){
        this.detalles[indice].cantidad +=1;
    }

    quitarUnidadDetalle(detalle:Detalle){
        let indiceDetalle = this.detalles.indexOf(detalle);

        this.detalles[indiceDetalle].cantidad+=-1;
        if(this.detalles[indiceDetalle].cantidad<=0){
            this.detalles.splice(indiceDetalle,1);
            const indiceJugador = this.listaGeneral.indexOf(detalle.fkJugador);
            this.listaGeneral.splice(indiceJugador,1);
        }
        this.calcularTotal();
    }



    calcularTotal(){
        this.total = this.detalles.reduce(
            (total,detalle)=>{
                return total+(detalle.cantidad*detalle.fkJugador.precio)
            },
            0
        );
    }

}