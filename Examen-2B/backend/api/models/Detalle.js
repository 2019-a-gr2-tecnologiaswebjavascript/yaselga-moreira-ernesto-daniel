/**
 * Detalle.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    fkJugador:{
      model:'Jugador'
    },
    fkFactura:{
      model:'Factura'
    },
    cantidad:{
      type:'number',
      required:true
    }
  },

};

