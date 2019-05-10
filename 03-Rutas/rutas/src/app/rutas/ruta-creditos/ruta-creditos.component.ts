import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruta-creditos',
  templateUrl: './ruta-creditos.component.html',
  styleUrls: ['./ruta-creditos.component.css']
})
export class RutaCreditosComponent implements OnInit {

  constructor(private readonly _activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    const Parametros$ = this._activatedRoute.params; //signo de $ significa que la variable es un observable
    console.log('Inicio');
      //const parametrosConsulta$ = this._activatedRoute.queryParams
    
    Parametros$.subscribe( // todo observable tiene el metodo subscribe y éste tiene 3 lecturas
      (parametros)=>{ // ok  //TRY
        console.log('Parametros: ',parametros);
      },
      (error)=>{ //se recibe el error //CATCH
        console.log('Error: ', error);
      },
      ()=>{ //Completado // OPCIONAL
        console.log('Completo');

      }
    )
    console.log('Fin');
  }

}
