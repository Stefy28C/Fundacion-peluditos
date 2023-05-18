const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const bcrypt = require("bcrypt");
const User = require("./app/models/User");
const connectDB = require("./config/Conexion");
const Donation = require("./app/models/Donations");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Conectar a la base de datos
connectDB();

// Configura las rutas de tu aplicación aquí
app.get("/", (req, res) => {});

// Inicia el servidor
app.listen(3000, function () {
  console.log("El servidor está en ejecución en el puerto 3000");
});

/**Metodo posta para registrarse */
app.post("/register", async (req, res) => {
  try {
    const user = new User({
      nombre: req.body.nombre,
      celular: req.body.celular,
      direccion: req.body.direccion,
      email: req.body.email,
      contrasena: req.body.contrasena,
    });
    console.log(user);
    await user.save({ timeout: 30000 }); // Guardar el usuario en la base de datos
    console.log("User saved:", user);
    res.send("Usuario registrado correctamente");
  } catch (error) {
    console.error("Error al registrar el usuario:", error);
    res.status(500).send("Error al registrar el usuario");
  }
});

//Metodo para autenticarse
app.post("/authenticate", async (req, res) => {
  const { email, contrasena } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(500).send("El usuario no existe");
    } else {
      user.isCorrectPassword(contrasena, function (err, result) {
        if (err) {
          console.log(err);
          res.status(500).send("Error al autenticar al usuario");
        } else {
          if (result) {
            console.log("Usuario Autenticado correctamente");
            res.status(200).send("Usuario Autenticado correctamente");
          } else {
            console.log("Usuario y/o contraseña incorrecta");
            res.status(500).send("Usuario y/o contraseña incorrecta");
          }
        }
      });
    }
  } catch (err) {
    console.log("Error al autenticar al usuario");
    res.status(500).send("Error al autenticar al usuario");
  }
});

//Metodo para guardar la donaciones
app.post("/donations", async (req, res) => {
  try {
    const donation = new Donation({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      email: req.body.email,
      banco: req.body.banco,
      cantidad_donacion: req.body.cantidad_donacion,
      frecuencia_donacion: req.body.frecuencia_donacion,
      total: req.body.total,
    });
    console.log(donation);
    await dotacion.save({ timeout: 30000 }); // Guardar el usuario en la base de datos
    console.log("Donacion Guardada:", donation);
    res.send("Donación registrada con exito!");
  } catch (error) {
    console.error("Error al registrar la donación:", error);
    res.status(500).send("Error al registrar la donación");
  }
});

module.exports = app;
