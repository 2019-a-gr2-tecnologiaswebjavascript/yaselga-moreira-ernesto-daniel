/**
 * Equipo.js
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
    liga:{
      type:'string',
      required:true
    },
    fechaCreacion:{
      type:'string',
      columnType: 'date',
      required:true
    },
    copasInt:{
      type:'number',
      required:true
    },
    campeonAct:{
      type:'boolean',
      required:true
    },
    jugadores:{
      collection:'Jugador',
      via:'fkEquipo'
    }
  },

};

