const dotenv = require('dotenv');
const express = require('express');

const connectDB = require('../src/config/database');

dotenv.config();
connectDB();

const app = require('./app');
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
