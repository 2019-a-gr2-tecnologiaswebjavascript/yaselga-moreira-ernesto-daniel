import { Injectable } from '@angular/core';
import { itemCarritoCompras } from '../../interfaces/item-carrito-compras';
import { itemCarritoComprasDetallado } from '../../interfaces/item-carrito-compras-detallados';

@Injectable()
export class CarritoService {
    carritoCompras = [];

    carritoComprasDetallado:itemCarritoComprasDetallado[] = [];

    agregarCarritoDeCompras(itemCarrito:itemCarritoCompras):itemCarritoComprasDetallado[]{
        const identificador = itemCarrito.valor;
        const identificadorTienda = itemCarrito.nombreTienda;

        let indiceTienda = -1;
        let indiceItem = -1;
        let existeItem = false;
        
        const existeTienda = this.carritoComprasDetallado.some(
            (item:itemCarritoComprasDetallado, indice)=>{
                console.log(item.nombreTienda, identificador);
                if(item.nombreTienda == identificadorTienda){
                    indiceTienda = indice;
                    return true;

                }else{
                    return false;
                }  
            }
        );
        console.log(existeTienda);

        if(existeTienda){
            existeItem = this.carritoComprasDetallado[indiceTienda].items.some(
                (item:items, indice)=>{
                    console.log(item.valor, identificador);
                    if(item.valor == identificador){
                        indiceItem = indice;      
                        return true;
                    }else{
                        return false;
                    }
                }
            );
            console.log('Se añadio al carrito');
        }else{
            this.añadirAlCarrito(itemCarrito, indiceTienda);
        }

        if(existeItem && existeTienda){
            this.añadirAlContador(indiceTienda, indiceItem);
        }else if(existeTienda){
            this.añadirAlDetalle(indiceTienda, identificador);
        }

        console.log('Se agrego el item carrito', itemCarrito);
        return this.carritoComprasDetallado;
    }

    private añadirAlContador(indiceTienda:number, indiceItem:number){
        this.carritoComprasDetallado[indiceTienda].items[indiceItem].cantidad++;
    }

    private añadirAlDetalle(indiceTienda:number, nombreItem:string){
        const aux = new items(1, nombreItem);
        this.carritoComprasDetallado[indiceTienda].items.splice(0,0,aux);
    }

    private añadirAlCarrito(item:itemCarritoCompras, indice:number){
        const itemTienda:items[] = [];
        itemTienda.splice(0,0, new items(1, item.valor))
        const aux: itemCarritoComprasDetallado = {
            nombreTienda:item.nombreTienda,
            fechaCompra:item.fechaCompra,
            items:itemTienda
        };
        this.carritoComprasDetallado.splice(0,0,aux);
    }
    

}

class items {
    constructor(cantidad:number, valor:string) {
        this.valor = valor;
        this.cantidad = cantidad;

    }
    cantidad:number;
    valor:string;
}