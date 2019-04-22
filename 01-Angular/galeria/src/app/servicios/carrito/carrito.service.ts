import { Injectable } from '@angular/core';
import { ItemCarritoCompras } from '../../interfaces/item-carrito-compras';

@Injectable()
export class CarritoService {
    carritoCompras:ItemCarritoCompras[] = [];
    agregarCarritoDeCompras(
        itemCarrito:ItemCarritoCompras
        ):ItemCarritoCompras[]{
            const identificador = itemCarrito.valor;
            let indiceItem = -1;
            const existeElItem = this.carritoCompras.some(
                (item:ItemCarritoCompras,indice)=>{
                    if (item.valor == identificador){
                        indiceItem = indice; 
                        return true
                    }else{
                        return false
                    }
                    
                }
            )
        if(existeElItem){
            this.anadirAlContador(indiceItem)
        }else{
            this.anadirAlCarrito(itemCarrito)
        }
        console.log('Item anadido al carrito', itemCarrito);
        return this.carritoCompras;
    }

    private anadirAlContador(indice:number){
        this.carritoCompras[indice].cantidad++;
    }
    private anadirAlCarrito(item:ItemCarritoCompras){
        item.cantidad = 1;
        this.carritoCompras.splice(0,0,item);
    }

}
/*
const respuesta = [1,2,3,4].forEach(
    (valor:number)=>{
        console.log('Valor:',valor);
        if(valor == 1){
            console.log('Te encontre esponja !!')
        }
});
console.log(respuesta); //undefined = void

const respuestaFind = [1,2,3,4].find(
    (valor:number):boolean =>{
        return valor ==5; // es igual a 5?
    }
    );
console.log(respuestaFind);

const respuestaSome = [1,2,3,4].some( //boolean
    (valor:number):boolean =>{
        return valor ==3; // Expresion = hay algun 3?
    }
    );
console.log(respuestaSome); //boolean

const respuestaEvery = [1,2,3,4].every( //boolean
    (valor:number):boolean =>{
        return valor >0; // Expresion = todos son mayor que 3?
    }
    );
console.log(respuestaEvery); //boolean

/*function busqueda(valor, indice, arreglo){
    console.log('Valor:',valor);
    if(valor == 1){
        console.log('Te encontre esponja !!')
    }
}*/