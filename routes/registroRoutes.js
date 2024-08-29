const express = require('express');
const router = express.Router();
const Registro = require('../models/Registro');

router.post('/registros', async (req, res) => {
  try {
    const registro = new Registro(req.body);
    await registro.save();
    res.status(201).json(registro);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  
});

router.get('/registros', async (req, res) => {
  try {
    const registros = await Registro.find().populate('ticket');
    res.status(200).json(registros);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
