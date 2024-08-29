const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/atendimentodeclientes', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

module.exports = app;

const ticketRoutes = require('./routes/ticketRoutes');
const registroRoutes = require('./routes/registroRoutes');

app.use('/api', ticketRoutes);
app.use('/api', registroRoutes);
