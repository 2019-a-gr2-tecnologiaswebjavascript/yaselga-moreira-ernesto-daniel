import { Observacion } from './observacion';
import { Producto } from './producto';

export interface Proveedor {
    id?: number;
    nombre?: string;
    descripcion?: string;
    telefono?: string;
    correo?:string;
    nivelconfianza?:number;
    arregloobservacion?:any | number | Observacion[];
    arregloproducto?:any | number | Producto[];
}
