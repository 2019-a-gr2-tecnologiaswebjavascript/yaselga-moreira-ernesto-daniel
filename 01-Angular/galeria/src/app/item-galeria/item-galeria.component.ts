import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-galeria',
  templateUrl: './item-galeria.component.html',
  styleUrls: ['./item-galeria.component.css']
})
export class ItemGaleriaComponent implements OnInit {

  title = 'Licoreria';

  @Input()
  textoBoton;   

  @Input()
  nombreItem;

  notas = [1,2,3,4,5,6,7,9,10]
  
  
  constructor() { }

  ngOnInit() {
  }

  alertar(){
    alert('Auxilio me desmayo: ' + this.nombreItem);
  }





}

/*
@DecoratorsClase() 
class Usuario{
  @DecoratorsVariable()
  private nombre = 'Adrian';
  constructor(@DecoratorsConstructor() nombre){

  }

  @DecoratorsMetodo()
 metodoPublico(){

 }
 private metodoPrivado(){

 }
 protected metodoProtected(){

 }
}
*/









