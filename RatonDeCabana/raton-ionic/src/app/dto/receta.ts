import { Ingrediente } from './ingrediente';

export interface Receta {
    id?: number;
    nombre?: string;
    descripcion?: string;
    magnitud?: string;
    cantidadporciones?:number;
    arregloproductoreceta?:any | number | Ingrediente[];
}
