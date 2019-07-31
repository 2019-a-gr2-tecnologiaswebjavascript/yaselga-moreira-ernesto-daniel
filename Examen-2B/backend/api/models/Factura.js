/**
 * Factura.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre:{
      type:'string',
      required:true
    },
    rucCedula:{
      type:'string',
      required:true
    },
    direccion:{
      type:'string',
      required:true
    },
    telefono:{
      type:'string',
      required:true
    },
    correo:{
      type:'string',
      required:true
    },
    total:{
      type:'number',
      required:true,
    },
    detalles:{
      collection:'detalle',
      via:'fkFactura'
    },
    fkUsuario:{
      model:'Usuario',
    }
  },

};

