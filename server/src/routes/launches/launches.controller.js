
const {getAllLaunches, addNewLaunch, existsLaunchWithId, abortLaunchById} = require('../../models/launches.model');

function httpGetAllLaunches(req,res){
  return res.status(200).json(getAllLaunches());;
}
function httpAbortLaunch(req,res){
  const launchId = +req.params.id;
  
  if (!existsLaunchWithId(launchId)){
    return res.status(400).json({
      error: "Launch not found"
  });
  }

  const aborted = abortLaunchById(launchId);
  
  return res.status(200).json(aborted);
  
}

function httpAddNewLaunches(req,res){
  const launch =req.body;
  //validate all properties are present in the request body
  if (!launch.mission || !launch.rocket || !launch.launchDate
      || !launch.target) {
        return res.status(400).json({
          error: "Missing required launch property"
        })
      }
  
  launch.launchDate = new Date(launch.launchDate);
  //validate the date is an actual date
  if (isNaN(launch.launchDate)){
    return res.status(400).json({
      error: "Not a valid Date in your request"
    })
  }
  addNewLaunch(launch);
  return res.status(201).json(launch)
}


module.exports={
    httpGetAllLaunches,
    httpAddNewLaunches,
    httpAbortLaunch,
};