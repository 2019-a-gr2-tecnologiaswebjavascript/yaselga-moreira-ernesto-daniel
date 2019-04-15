import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-galeria',
  templateUrl: './item-galeria.component.html',
  styleUrls: ['./item-galeria.component.css']
})
export class ItemGaleriaComponent implements OnInit {

  title = 'Licoreria';

  url = 'https://dpf77bhxauhdh.cloudfront.net/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/c/e/cerveza-corona-extra-355-cc-pack-24-botellas.jpg';

  // en varibles const una sola reasignacion
  // var no vamos a utilizar
  // let permite cambiar el valor

  @Input()
  textoBoton;

  @Input()
  nombreItem;

  constructor() { }

  ngOnInit() {
  }

  alertar(){
    alert('Auxilio me desmayo :v '+this.nombreItem);
  }

  alertarBlur(){
    alert('Alertando bliur');
  }

  cambiarImagen(){
    const url1= 'https://media.aweita.larepublica.pe/678x508/aweita/imagen/2018/03/07/noticia-seis-estudios-cientificos-que-demuestran-los-beneficios-de-la-cerveza-para-la-salud.png';
    const url2 = 'https://dpf77bhxauhdh.cloudfront.net/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/c/e/cerveza-corona-extra-355-cc-pack-24-botellas.jpg';
    
    if (this.url === url1){
      this.url = url2;
      this.cambioChela.emit(true);
    }
    else{
      this.url = url1;
      this.cambioCerveza.emit(true);
    }
 
  }

  notas = [1,2,3,4,5,6,7,8,9,10]

  @Output()
  cambioChela: EventEmitter<boolean> = new EventEmitter()

  @Output()
  cambioCerveza: EventEmitter<boolean> = new EventEmitter()
}
/*
@DecoreatorsClase() // -> Funcion que se ejecuta antes de algo
class Usuario{
  @DecoratorsVariable()
  private nombre = 'Alex';

  constructor(@DecoratorsConstructor() nombre){

  }
  @DecoratorsMetodo()
  metodoPublico(){

  }

  private metodoPrivate(){

  }

  protected metodoProtected(){
    
  }

}
*/
