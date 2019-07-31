import { Receta } from './receta';
import { Producto } from './producto';

export interface Ingrediente {
    id?: number;
    cantidad?: number;
    fkreceta?: any | number | Receta;
    fkproducto?: any | number | Producto;
}
