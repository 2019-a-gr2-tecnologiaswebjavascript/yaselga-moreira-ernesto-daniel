/**
 * Proveedor.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id:{
      type: 'number',
      required: true
    },
    nombre:{
      type: 'string',   
      required: true
    },
    descripcion:{
      type: 'string'
    },
    telefono:{
      type:'string',
      required: true
    },
    correo:{
      type:'string',
    },
    nivelDeConfianza:{
      type:'number',
    },
    //Configuracion Padre
    arregloObservacion:{ // nombre de los hijos
      collection:'Observacion', // modelo a relacionarse(hijo)
      via:'fkProveedor' //nombre de atributo Foreign Key (Hijo)
    },
    arregloProdcuto:{
      collection:'Producto',
      via:'fkProveedor'
    }
 
  },

};

