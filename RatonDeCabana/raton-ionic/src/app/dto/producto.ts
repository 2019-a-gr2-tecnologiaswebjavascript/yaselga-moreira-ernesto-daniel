import { Inventario } from './inventario';
import { Ingrediente } from './ingrediente';
import { DetalleFactura } from './detallefactura';
import { Proveedor } from './proveedor';

export interface Producto {
    id?: number;
    nombre?: string;
    marca?: string;
    magnitud?: string;
    cantidad?: number;
    formato?: string;
    observacion?: string;
    tipo?: string;
    precio?: number;
    arregloinventario?: any | number | Inventario[];
    arreglorecetaproducto?: any | number | Ingrediente[];
    arreglodetallefactura?: any | number | DetalleFactura[];
    fkproveedor?: any | number | Proveedor;
    
}
