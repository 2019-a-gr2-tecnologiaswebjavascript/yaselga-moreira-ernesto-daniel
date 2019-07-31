import { Factura } from './factura';

export interface Cliente {
    id?: number;
    CI?: string;
    nombre?: string;
    direccion?: string;
    telefono?: string;
    correo?: string;
    arreglofactura?:any | number | Factura[];
}