import { Proveedor } from './proveedor';

export interface Observacion {
    id?: number;
    texto?: number;
    fkproveedor?: any | number | Proveedor;
}
