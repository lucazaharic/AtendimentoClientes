const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegistroSchema = new Schema({
  ticket: { type: Schema.Types.ObjectId, ref: 'Ticket', required: true },
  texto: { type: String, required: true },
  identificadorAtendente: { type: String, required: true },
  motivos: { type: [String], required: true }
});

module.exports = mongoose.model('Registro', RegistroSchema);
