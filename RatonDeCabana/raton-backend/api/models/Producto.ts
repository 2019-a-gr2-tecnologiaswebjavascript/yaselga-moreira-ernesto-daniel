/**
 * Producto.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id:{
      type:'number',
      required: true
    },
    nombre:{
      type:'string',
      required: true
    },
    marca:{
      type: 'string'   
    },
    magnitud:{
      type: 'string'
    },
    cantidad:{
      type: 'number'
    },
    formato:{
      type: 'string'
    },
    observacion:{
      type: 'string'
    },
    tipo:{
      type: 'string'
    },
    precio:{
      type: 'number'
    },
    //Configuracion Padre
    arregloInventario:{ // nombre de los hijos
      collection:'Inventario', // modelo a relacionarse(hijo)
      via:'fkProducto' //nombre de atributo Foreign Key (Hijo)
    },
    arregloRecetaProducto:{ // nombre de los hijos
      collection:'Ingrediente', // modelo a relacionarse(hijo)
      via:'fkProducto' //nombre de atributo Foreign Key (Hijo)
    },
    arregloDetalleFactura:{
      collection:'DetalleFactura',
      via:'fkProducto'
    },
    //configuracion Hijo
    fkProveedor:{
      model:'Proveedor', //Modelo a relacionarse (PAPA)
      required:true
    }

  },

};

