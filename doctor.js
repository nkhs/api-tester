/*
Put content of angular2 build into 'public' folder.
*/
// const html = __dirname + '/public/doctor/';

const port = 4000;
const apiUrl = '/api';
var path = require('path')
// Express
const bodyParser = require('body-parser');
const compression = require('compression');
const express = require('express');
var app = express();
app.use(express.static(path.join(__dirname, "public/doctor/")));
app
    .use(compression())
    .use(bodyParser.json())
    // Static content
    // .use(express.static(html))
    // // Default route
    // .use(function(req, res) {
    //   res.sendFile(html + 'index.html');
    // })
    // Start server
    .listen(port, function () {
        console.log('Port: ' + port);
        // console.log('Html: ' + html);
    });