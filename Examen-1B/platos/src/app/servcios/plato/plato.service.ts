import { Injectable } from '@angular/core';
import {IngredienteService} from "../ingrediente/ingrediente.service";

@Injectable({
  providedIn: 'root'
})
export class PlatoService {

  constructor(private readonly _ingredienteService:IngredienteService) { }

  equipos = [
    {
      id:1,
      nombre:'Encebollado',
      liga: 'Ecuador',
      fechaCreacion:'2019-06-05',
      numeroCopasInternacionales:1,
      campeonActual:false,
    },
    {
      id:2,
      nombre:'Bife de Chorizo',
      liga: 'Argentina',
      fechaCreacion:'2019-06-05',
      numeroCopasInternacionales:2,
      campeonActual:true,
    },
    {
      id:3,
      nombre:'Paella',
      liga: 'España',
      fechaCreacion:'2019-06-05',
      numeroCopasInternacionales:4,
      campeonActual:false,
    }
    ];

    // Buscar equipo por nombre
    buscar(nombre:string){
        return this.equipos.filter(
          (equipo)=>{
                return equipo.nombre === nombre;
          }
        )
    }

    // Eliminar equipo
    eliminar(equipo){
      // Eliminar ingredientes asociados
      this._ingredienteService.borrarJugadorEquipo(equipo.id);
      // Obtener posicion del equipo en el arreglo
      const indice = this.equipos.indexOf(equipo);
      // Eliminar equipo
      this.equipos.splice(indice,1);
    }

  // Crear equipo
  crear(equipo){
      // Obtener el ultimo id de equipo guardado
      const idUltimoEquipo = this.equipos[this.equipos.length-1].id;
      equipo['id'] = idUltimoEquipo+1;
      this.equipos.push(equipo);

  }



}
