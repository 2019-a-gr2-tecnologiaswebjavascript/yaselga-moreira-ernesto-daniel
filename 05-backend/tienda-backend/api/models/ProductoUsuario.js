/**
 * ProductoUsuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    cantidad:{
      type: 'number',
      min: 1
    },  // Configuracion HIJO
    fkUsuario:{  // Nombre del campo FK
      model: 'usuario',  // Modelo a relacionarse (PAPA)
      required: true  // OPCIONAL!!!! 
    },  // Configuracion HIJO
    fkProducto:{  // Nombre del campo FK
      model: 'producto',  // Modelo a relacionarse (PAPA)
      required: true  // OPCIONAL!!!! 
    }

  },
};

