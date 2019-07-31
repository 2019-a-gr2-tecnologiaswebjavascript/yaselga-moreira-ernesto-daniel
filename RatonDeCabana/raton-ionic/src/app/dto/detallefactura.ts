import { Factura } from './factura';
import { Producto } from './producto';

export interface DetalleFactura {
    id?: number;
    cantidad?: number;
    preciounit?: number;
    fkFactura?:any | number | Factura;
    fkProducto?:any | number | Producto;
}
