import { Usuario } from './usuario';
import { Producto } from './producto';

export interface ProductoUsuario {
    createdAt?: number;
    updatedAt?: number;
    id?: number;
    cantidad: number;
    fkUsuario:  number | Usuario | any;
    fkProducto: number | Producto| any; 
}