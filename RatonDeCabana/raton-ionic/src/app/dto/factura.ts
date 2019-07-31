import { DetalleFactura } from './detallefactura';
import { Cliente } from './cliente';

export interface Factura {
    id?: number;
    fecha?: number;
    subtotal?: number;
    iva?: number;
    total?: number;
    arreglodetalle?: any| number | DetalleFactura[]; 
    fkcliente?: any | number | Cliente;
}
