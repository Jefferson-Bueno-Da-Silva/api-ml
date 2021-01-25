require('dotenv').config()
//express
const express   = require('express');
const morgan    = require('morgan');
const http = require('http');
var cors = require('cors')

const app = express()
const port = process.env.PORT || 80;

app.use(cors())
app.set('port', port);
//EXPRESS TRABALHAR COM JSON
app.use(express.json());
//EXPRESS TRABALHAR COM URL ENCONDED
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
//CONTROLA AS ROTAS DA PAGINA
app.use(require('./routes'));

const server = http.createServer(app);
app.listen(port)
server.on('error', handleError);
server.on('listening', handleStartListening);

function handleError(error) {
    if (error) {
        switch (error.code) {
        case 'EACCES':
            console.error(`${port} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${port} is already in use`);
            process.exit(1);
            break;
        }
    }
    throw error;
}

function handleStartListening() {
    console.log(`Listening on port ${server.address().port}`)
}