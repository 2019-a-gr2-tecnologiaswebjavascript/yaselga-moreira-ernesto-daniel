import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Floreria';
  arregloFlores = [
    new Flor("Papitas","A lo bestia"),
    new Flor("Carnitas","Gorditas"),
    new Flor("Chicas","Cheveres"),
  ];

  arregloFloresJS = [
    {
      nombre: "Papitas",
      descripcion: "A lo bestia"
    },
    {
      nombre: "Carnitas",
      descripcion: "Gorditas"
    },
    {
      nombre: "Chicas",
      descripcion: "Cheveres"
    }
  ]

  cambioChela(evento:boolean){
    //logica hacer titulo verde
    console.log('llego a chela: ',evento)
    if(this.evento = true){
      this.url = chelas;
      this.cambioChela.emit(true);
    }else{

    }
  }

  cambioCerveza(evento:boolean){
    //logica hacer titulo amarillo
    console.log('llego a cerveza: ',evento)
  }
}


class Flor {
  
  constructor(
    public nombre:string,
    public descripcion:string){
    
  }
}
