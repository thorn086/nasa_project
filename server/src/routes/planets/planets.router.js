const express = require('express');

const { getAllPlanets } = require('./planets.controller');

const planetsRouter = express.Router();

// Router calls functions from the controller---> planets.controller.js

planetsRouter.get('/planets', getAllPlanets);


module.exports = planetsRouter;
