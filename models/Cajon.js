const mongoose = require('mongoose');

const cajonSchema = new mongoose.Schema({
  numeroCajon: Number,
  ocupado: Boolean,
  fechaEntrada: Date,
  fechaSalida: Date
});

module.exports = mongoose.model('Cajon', cajonSchema);
