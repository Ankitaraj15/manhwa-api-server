const mongoose = require('mongoose');

const ManhwaSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  genre: String,
  status: String,
  chapters: Number,
});

module.exports = mongoose.model('Manhwa', ManhwaSchema);
