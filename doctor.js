/*
Put content of angular2 build into 'public' folder.
*/
// const html = __dirname + '/public/doctor/';

const port = 4000;
var path = require('path')
// Express
const bodyParser = require('body-parser');
const compression = require('compression');
const express = require('express');
var app = express();
app.use(express.static(path.join(__dirname, "public/doctor")));
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

var app2 = express();
app2.use(express.static(path.join(__dirname, "public/build")));
app2
    .use(compression())
    .use(bodyParser.json())
    // Static content
    // Default route
    .use(function(req, res) {
      res.sendFile(path.join(__dirname, "public/build/index.html"));
    })
    // Start server
    .listen(7000, function () {
        console.log('http://127.0.0.1:' + 7000);
        // console.log('Html: ' + html);
    });