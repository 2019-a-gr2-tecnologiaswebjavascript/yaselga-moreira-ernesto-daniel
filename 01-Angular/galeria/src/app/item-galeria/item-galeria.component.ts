import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-item-galeria',
  templateUrl: './item-galeria.component.html',
  styleUrls: ['./item-galeria.component.css']
})
export class ItemGaleriaComponent implements OnInit,OnDestroy {

  title = 'Licoreria';

  @Input()
  titulo; 

  @Input()
  textoBoton;   

  @Input()
  nombreItem;

  @Output()
  cambioChela: EventEmitter<boolean> = new EventEmitter()

  @Output()
  cambioCerveza: EventEmitter<boolean> = new EventEmitter()

  url = "http://www.dna-autoparts.com/23121-thickbox_default/bielas-forjadas-eagle-para-sr20det.jpg";

  notas = [1,2,3,4,5,6,7,8,9,10]

  constructor() { }

  

  alertar(){
    alert('Auxilio me desmayo: ' + this.nombreItem);
  }

  alertarBlur(){
    alert('Alertar blur');
  }

  cambiarImagen(){
    const cervezas = "https://img.chilango.com/2016/01/cervezas-cervezas-cervezas.jpg"
    const chelas = "http://www.dna-autoparts.com/23121-thickbox_default/bielas-forjadas-eagle-para-sr20det.jpg"
    if(this.url === cervezas){
      this.url = chelas;
      this.cambioChela.emit(true);
    }else{
      this.url = cervezas;
      this.cambioCerveza.emit(true);
    }
    // var url2 = "http://img.chilango.com/2016/01/cervezas-cervezas-cervezas.jpghttp://img.chilango.com/2016/01/cervezas-cervezas-cervezas.jpg"
    // let url3 = "http://img.chilango.com/2016/01/cervezas-cervezas-cervezas.jpghttp://img.chilango.com/2016/01/cervezas-cervezas-cervezas.jpg"
    // this.url = url1;
  }

  ngOnInit() {
    console.log("'Empezo'");
  }

  ngOnDestroy(){
    console.log('"Termino"');
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



/*
Ciclo de vida del componente

ngOnInit -> OnInit -> Instancia
ngOnDestroy -> OnDestroy

*/ 

/*
- RUTA -> LOGIN/MODULOS/ETC
  - PAPA []->hijo  []->hija
    - HIJO []->nieto ()->papa
      - NIETO ->()->hijo
  - HIJA
    - NIETA
  - TIO
    - PRIMO
*/


/* - SERVICIO
><
  - PAPA
    - HIJO
      - NIETO
  - HIJA
    - NIETA
  - TIO
    - PRIMO
*/



/*

# -> Modulo
* -> Componente
- -> Servicio

# ModuloPrincial (AppModule)
  *  ComponentePrincipal (AppComponent) 

.........................
# ModuloNotas (NotasModule)
  *  TablaMostrarMateria 
     _ [] notasPorMateria
     _ [] nombreBoton
     _ [] iconoBoton
     _ () ejecutoAccion
  *  listaMaterias
     _ () seleccionoMateria
*/