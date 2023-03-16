
const http = require('http');
const app = require('./app');
const {loadPlanetaryData} = require('./models/planets.model')
const server = http.createServer(app)
const PORT = process.env.PORT || 8000;

async function startServer(){
    await loadPlanetaryData();

    server.listen(PORT, () => {
        console.log(`Listening on ${PORT}...`);
    });
}

startServer();


