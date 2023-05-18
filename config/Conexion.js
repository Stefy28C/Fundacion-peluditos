const mongoose = require("mongoose");

// Definir la URI de conexión
const DB_URI = "mongodb://127.0.0.1:27017/Peluditos";

// Conectar a la base de datos
const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //esperar 30 segundos si la conexion se demora 
      connectTimeoutMS: 30000,
      socketTimeoutMS: 30000,
    });
    console.log("Conexión a la base de datos exitosa!");
  } catch (err) {
    console.error("Error al conectarse a la base de datos:", err.message);
    process.exit(1);
  }
};

// Exportar la función de conexión a la base de datos
module.exports = connectDB;
