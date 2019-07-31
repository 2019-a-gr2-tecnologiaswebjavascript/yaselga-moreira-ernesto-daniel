/**
 * Jugador.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre:{
      type:'string',
      required: true
    },
    nombreCamisa:{
      type:'string',
      required:true
    },
    poderEspecialDos:{
      type:'string',
      required:true
    },
    numeroCamisa:{
      type:'number',
      required:true
    },
    fechaIngresoEquipo:{
      type:'string',
      columnType: 'date',
      required:true
    },
    goles:{
      type:'number',
      required:true,
    },
    fkEquipo:{
      model:'equipo',
    },
    precio:{
      type:'number',
      required:true,
    }
  },

};

