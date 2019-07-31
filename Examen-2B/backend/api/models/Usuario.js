/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre:{
      type:'string',
      required:true,
    },
    correo:{
      type:'string',
      required: true,
      unique:true
    },
    clave:{
      type:'string',
      required:true
    },
    facturas:{
      collection:'Factura',
      via:'fkUsuario'
    }
  },
  customToJSON: function() {
    // Return a shallow copy of this record with the password and ssn removed.
    // @ts-ignore
    return _.omit(this, ['clave', 'ssn','facturas'])
  },
};

