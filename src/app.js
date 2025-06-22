const express = require('express');
const app = express();
const authRoutes = require('./modules/auth/auth.routes');
const { swaggerUi, swaggerSpec } = require('./config/swagger');

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
module.exports = app;
