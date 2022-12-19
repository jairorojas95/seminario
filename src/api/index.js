//Exports all endpoints of availability
const express = require('express');
const genericRoutes = express.Router();

const test = require('./test');

genericRoutes.use('/test', test);

module.exports = genericRoutes;
