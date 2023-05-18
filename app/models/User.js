const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds=10;

//hacemos un esquema para que se creen los datos en nuestra coleccion
const userSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  celular: {
    type: Number,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  contrasena: {
    type: String,
    required: true,
  },
});

/**el metodo crea un hash antes de qeu nues tro registrose
 * envie a la coleccion de mongo DB
 */
userSchema.pre("save", function (next) {
  if (this.isNew || this.isModified("contrasena")) {
    const document = this;

    bcrypt.hash(document.contrasena, saltRounds,(err, hashedPassword) => {
      if (err) {
        next(err);
      } else {
        document.contrasena = hashedPassword;
        next();
      }
    });
  } else {
    next();
  }
});

/**compoarar el password que tiene hash con el que
 * vamos a ingresar para loguearnos creamos un nuevo metodo
 */

userSchema.methods.isCorrectPassword = function (contrasena, callback) {
  bcrypt.compare(contrasena, this.contrasena, function (err, result) {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};




module.exports = mongoose.model("User", userSchema,"users");
