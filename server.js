//GET DEPENDENCIES

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

//GET API ROUTES

const api = require('./server/routes/api');
const app = express();

// PARSER FOR POST DATA

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

//POINT STATIC PATH TO DIST
app.use(express.static(path.join(__dirname, 'dist')));

//SET OUR API ROUTES
app.use('/api', api);

//CATCH ALL OTHER ROUTES AND RETURN THE INDEX FILE
app.get('*',(req, res) => 
{ 
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//GET PORT FROM ENVIRONMENT AND STORE IN EXPRESS
const port = process.env.port || '3000';
app.set('port', port);

//CREATE HTTP SERVER

const server = http.createServer(app);

//LISTEN ON THE STATED PORT

server.listen(port, () => console.log(`API running on localhost:${port}`));