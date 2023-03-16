// Data for the Planets controller

//hello this is a git test

const fs = require('fs')
const path = require('path');
const { parse } = require('csv-parse');


//create a new array to hold filtered planets

//Filter the data to find livable planets
//This reads our file  and filter data file


/* NEW PROMISE SET UP:

const promise = new Promise((resolve, reject) =>{
    resolve(42)
});
promise.then((result)=>{

})
const result = await promise;
console.log(result);

*/
const result =[];

function livingPlanet(planet){
    return planet['koi_disposition'] === 'CONFIRMED' && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 && planet['koi_prad'] < 1.6
}

function loadPlanetaryData() {
    return new Promise((resolve, reject)=> {
        fs.createReadStream(path.join(__dirname, '..','..','data','kepler_data.csv'))
        .pipe(parse({
            comment: "#",
            columns: true,
        }))
        .on('data', (data)=>{
            if (livingPlanet(data))
            result.push(data)
        })
        .on('err', (err)=>{
            console.log('!! THERE IS AN ERROR !!', err.message)
            reject(err);
        })
        .on('end', () =>{
            console.log(`${result.length} habitable planets were found!`)
            resolve();
        });
    });
}


module.exports ={
    loadPlanetaryData,
    planets: result,
    
};