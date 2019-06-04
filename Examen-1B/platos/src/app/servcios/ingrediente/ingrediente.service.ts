import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngredienteService {
  jugadores = [
    {
      id:1,
      idEquipo:1,
      numeroCamiseta:3,
      nombreCamiseta:'yuca',
      nombreCompletoJugador:'pedazo de yuca pequeño',
      poderEspecialDos:'base',
      fechaIngresoEquipo:'2019-08-05',
      goles:true,
      precio:0.50
    },
    {
      id:2,
      idEquipo:1,
      numeroCamiseta:2,
      nombreCamiseta:'pescado',
      nombreCompletoJugador:'pedazo de pescado pequeño',
      poderEspecialDos:'base',
      fechaIngresoEquipo:'2019-08-05',
      goles:true,
      precio:1
    },
    {
      id:3,
      idEquipo:1,
      numeroCamiseta:3,
      nombreCamiseta:'cebolla',
      nombreCompletoJugador:'cebolla paiteña',
      poderEspecialDos:'base',
      fechaIngresoEquipo:'2019-08-05',
      goles:false,
      precio:0.50
    },
    {
      id:4,
      idEquipo:2,
      numeroCamiseta:2,
      nombreCamiseta:'chorizo',
      nombreCompletoJugador:'un chorizo argentino ¬w¬',
      poderEspecialDos:'base',
      fechaIngresoEquipo:'2019-08-05',
      goles:true,
      precio:2.5
    },
    {
      id:5,
      idEquipo:3,
      numeroCamiseta:3,
      nombreCamiseta:'arroz',
      nombreCompletoJugador:'arroz oso',
      poderEspecialDos:'base',
      fechaIngresoEquipo:'2019-08-05',
      goles:false,
      precio:5
    },
  ];
  constructor() { }

  obtenerJugadores(idEquipo:number){
      return this.jugadores.filter(
        (jugador)=>{
                  return jugador.idEquipo === idEquipo
              }
      )
  }

  buscarJugador(nombre:string){
    return this.jugadores.filter(
      (jugador)=>{
                return jugador.nombreCompletoJugador == nombre;
              }
    )
  }

  borrarJugador(idJugador:number){
    const  jugador = this.jugadores.filter(
      (jugador)=>{
        return jugador.id === idJugador;
      }
    )[0];
    const indice = this.jugadores.indexOf(jugador);
    this.jugadores.splice(indice,1);
  }

  borrarJugadorEquipo(idEquipo:number){
    this.jugadores.forEach(
      (jugador)=>{
        if(jugador.idEquipo === idEquipo){
          const indice = this.jugadores.indexOf(jugador);
          this.jugadores.splice(indice,1);
        }
      }
    );

  }

  crearJugador(jugador){
    jugador['id'] = this.jugadores[this.jugadores.length-1].id+1;
    this.jugadores.push(jugador);
  }


}
