const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017'; // Cambia esto con la URL de tu base de datos
const dbName = 'Peluditos'; // Cambia esto con el nombre de tu base de datos

MongoClient.connect(url, function(err, client) {
  console.log("Conectado correctamente al servidor de MongoDB");

  const db = client.db(dbName);

  // Aquí es donde agregarás los datos a la colección
});
