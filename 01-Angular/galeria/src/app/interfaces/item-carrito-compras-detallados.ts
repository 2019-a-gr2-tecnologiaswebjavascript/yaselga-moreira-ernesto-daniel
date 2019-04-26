export interface itemCarritoComprasDetallado{
    
    nombreTienda:string;
    fechaCompra?:Date;
    items:item[];
}

class item{
    valor:string;
    cantidad:number;
}