// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const calculationRoutes = require('./src/route/calculationRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Use Routes
app.use('/calculate', calculationRoutes);

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
