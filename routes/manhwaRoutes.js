const express = require('express');
const router = express.Router();
const Manhwa = require('../models/manhwa');

// Create
router.post('/', async (req, res) => {
  try {
    const manhwa = new Manhwa(req.body);
    await manhwa.save();
    res.status(201).send(manhwa);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Read All
router.get('/', async (req, res) => {
  const manhwas = await Manhwa.find();
  res.send(manhwas);
});

// Read One
router.get('/:id', async (req, res) => {
  const manhwa = await Manhwa.findById(req.params.id);
  res.send(manhwa);
});

// Update
router.put('/:id', async (req, res) => {
  const manhwa = await Manhwa.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(manhwa);
});

// Delete
router.delete('/:id', async (req, res) => {
  await Manhwa.findByIdAndDelete(req.params.id);
  res.send({ message: 'Deleted successfully' });
});

module.exports = router;
