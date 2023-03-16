const { planets } = require('../../models/planets.model');

//Holds all functions needed for the planets router---> planets.model.js

function getAllPlanets(req,res) {
  return res.status(200).json(planets);
};

module.exports = {
  getAllPlanets,
};