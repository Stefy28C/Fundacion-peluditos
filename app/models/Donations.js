const mongoose = require("mongoose");

//hacemos el esquema de mongo
const donationSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    banco: {
        type: String,
        required: true,
    },
    cantidad_donacion: {
        type: Number,
        required: true,
    },
    frecuencia_donacion: {
        type: Number,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    }

});

module.exports = mongoose.model("Donation", donationSchema,"donations");