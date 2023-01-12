//Exports all endpoints of availability
const express = require('express');
const genericRoutes = express.Router();

const senales = require('./senales');

genericRoutes.use('/senales', senales);

module.exports = genericRoutes;
