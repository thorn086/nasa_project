const { getAllPlanets } = require('../../models/planets.model');

//Holds all functions needed for the planets router---> planets.model.js

function httpGetAllPlanets(req,res) {
  return res.status(200).json(getAllPlanets());
};

module.exports = {
  httpGetAllPlanets,
};