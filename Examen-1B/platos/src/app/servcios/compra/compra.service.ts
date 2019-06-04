import { Injectable } from '@angular/core';
import {ProductoPlato} from "../../interfaces/producto";

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  listaCompras:ProductoPlato[] = [];
  total:number = 0;
  constructor() { }

  agregarProducto(plato){
    // Buscar si existe
    const id = plato.id;
    let indiceItem = -1;
    const existe = this.listaCompras
      .some(
      (producto, indice)=> {
                if(producto.id === plato.id){
                  indiceItem = indice;
                  return true;
                }
                return false;
              }
    );
    if(existe){
      // Si existe actualizar
      this.anadirAlContador(indiceItem);
      console.log("Se anadio al carrito")
    }else{
      // Si no agregar
      this.anadirLista(plato);
    }
    return [];
  }

  quitarProducto(jugador){

    const indice = this.listaCompras.indexOf(jugador);
    this.quitarContador(indice);

  }

  protected calcularTotal(){
    let total=0;
    this.listaCompras.forEach(
      (producto)=>{
          console.log(producto.precio, total);
          total += producto.precio*producto.cantidad;
      }
    );
    this.total = total;
    console.log("El total: ",this.total);
  }

  protected anadirAlContador(indiceItem:number){
    this.listaCompras[indiceItem].cantidad++;
    this.calcularTotal();
  }

  protected anadirLista(jugador){
    jugador['cantidad'] = 1;
    this.listaCompras.push(jugador);
    this.calcularTotal();
  }

  protected quitarContador(indiceItem:number){
      this.listaCompras[indiceItem].cantidad --;
      const  cantidad = this.listaCompras[indiceItem].cantidad;
      if(cantidad <= 0){
        this.listaCompras.splice(indiceItem,1);
        this.calcularTotal();
      }else {
        console.log("Total: ",this.total);
        this.calcularTotal();
      }

  }





}
