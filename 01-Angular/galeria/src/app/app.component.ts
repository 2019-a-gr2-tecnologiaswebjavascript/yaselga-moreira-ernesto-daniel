import { Component } from '@angular/core';
import { CarritoService } from './servicios/carrito/carrito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Floreria';
  claseTitulo = 'rojo';
  estaMostrando = false;

  arregloFlores = [
    new Flor("Papitas","A lo bestia"),
    new Flor("Carnitas","Gorditas"),
    new Flor("Chicas","Cheveres")
  ];

  arregloFloresJs = [
    {
      titulo: "Don Jose",
      nombre: "Papitas",
      descripcion:"A lo bestia",
      notas:[
        'papitas',
        'empanadas'
      ]
    },
    {
      titulo: "Don Pepito",
      nombre:"Carnitas",
      descripcion:"Gorditas",
      notas:[
        'motes',
        'ensaldas'
      ]
    },
    {
      titulo: "Doña Maria",
      nombre:"Chicas",
      descripcion:"Cheveres",
      notas:[
        'perros calientes',
        'amburguesas'
      ]

    }
  ]

  constructor(private readonly _carritoservice:CarritoService){

  }

  cambioChela(evento:boolean){
    // logica hacerle verde
    console.log('Llego a chela: ', evento);
    this.claseTitulo = 'verde';
  }

  cambioCerveza(evento:boolean){
    // logica hacerle amarillo
    console.log('Llego a cerveza: ', evento);
    this.claseTitulo = 'amarillo';
  }

  mostrar(estaMostrando){
    this.estaMostrando = estaMostrando;
  }



}

class Flor{
  constructor(
    public nombre: string,
    public descripcion:string){
  }
}


