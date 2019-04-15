import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  clase = 'rojo';

  title = 'floreria';

  arregloFlores = [
    new Flor("Papitas", "a lo bestia"),
    new Flor("Carnitas", "gorditas"),
    new Flor("chicas", "cheveres")
  ];

  arregloFLoresJs = [
    {
      nombre: "papitas",
      descripcion: "a lo bestia"
    },
    {
      nombre: "carnitas",
      descripcion: "gorditas"
    },
    {
      nombre: "chicas",
      descripcion: "cheveres"
    }
  ]

  cambioChela(evento: boolean){
    console.log('Llego a chela: ', evento);
    const verde: string = 'verde';
    this.clase = verde;


  }

  cambioCerveza(evento: boolean){
    console.log('Llego a cerveza: ', evento);
    const verde: string = 'amarillo';
    this.clase = verde;
  }

}


class Flor{

  /*

  nombre: string;
  descripcion: string;

  constructor(nombre: string, descripcion: string){
    this.nombre = nombre;
    this.descripcion = descripcion;

  }

  TODO LO QUE ESTA ARRIBA SE PUEDE HACER EN LA LINEA DE ABAJO!!!!!!

*/

  constructor(public nombre: string, public descripcion: string){

  }

} 