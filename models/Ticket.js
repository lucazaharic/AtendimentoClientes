const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
  identificadorPessoa: { type: String, required: true },
  titulo: { type: String, required: true },
  telefone: { type: String, required: true }
});

module.exports = mongoose.model('Ticket', TicketSchema);
