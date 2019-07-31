import { Inventario } from './inventario';

export interface DetalleInventario {
    id?: number;
    fechacompra?: number;
    fechaexpiracion?: number;
    cantidad?: number;
    fkinventario?:any | number | Inventario;
}
