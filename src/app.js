const express = require('express');
const app = express();

app.use('/user', require('./routes/userRoutes'));

module.exports = app;
