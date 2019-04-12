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
}


class Flor {
  
  constructor(
    public nombre:string,
    public descripcion:string){
    
  }
}
