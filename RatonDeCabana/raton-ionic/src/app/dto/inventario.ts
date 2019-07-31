import { DetalleInventario } from './detalleinventario';
import { Producto } from './producto';

export interface Inventario {
    id?: number;
    cantidad?: number;
    arregloproductoinventario?: any | number | DetalleInventario[];
    fkproducto?: any | number | Producto;
}
