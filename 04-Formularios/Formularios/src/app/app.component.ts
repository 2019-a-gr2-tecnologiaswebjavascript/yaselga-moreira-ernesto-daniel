import { Component } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Formularios';
  nombre:string;
  apellido:string;
  q:string;
  
  guardarUsuario(formulario){
    console.log(formulario);
    this.nombre="Benito C."
  }
}
