const express = require('express');

const { httpGetAllPlanets } = require('./planets.controller');

const planetsRouter = express.Router();

// Router calls functions from the controller---> planets.controller.js

planetsRouter.get('/', httpGetAllPlanets);


module.exports = planetsRouter;
