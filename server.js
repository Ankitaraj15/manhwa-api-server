require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const manhwaRoutes = require('./routes/manhwaRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/manhwas', manhwaRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  app.listen(5000, () => console.log('🚀 Server running on http://localhost:5000'));
})
.catch((err) => console.log(err));
