/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  login:function (req, res) {
    // Validar si se han enviado todos los campos
    if(!_.has(req.body,'correo') || !_.has(req.body,'clave')){
      return res.serverError({mensaje:'Todos los campos deben ser obligatorios', error:404});
    }
    // Encontrar el usuario
    // @ts-ignore
    Usuario.findOne(
      {
        correo:req.body.correo,
      }
    ).exec(
      (error,usuario)=>{
        // Si no encontro
        if(error){
          return res.serverError({mensaje:'Error del servidor', error:500});
        }
        if (!usuario) return res.serverError({mensaje:'No existe un usuario con ese correo', error:404});

        // Si encontro comparar contraseñas
        if(req.body.clave === usuario.clave){
          return res.ok({mensaje:'OK', usuario:usuario});
        }else {
          // Si no son iguales
          return res.serverError({mensaje:'Contraseña incorrecta', error:300});
        }

      }
    )
  }

};

