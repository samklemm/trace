'use strict';

// [START app]
var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

// Form route
app.get('/form.html', function (req, res) {
    res.sendFile(__dirname + '/form.html');
});

app.get('/form.js', function (req, res) {
    console.log('form');
    res.sendFile(__dirname + '/form.js')
});

// Homepage route
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/homepage.html');
});

app.get('/homepage.js', function (req, res) {
    console.log('homepage');
    res.sendFile(__dirname + '/homepage.js')
});

// Location Report route
app.get('/locationreport.html', function (req, res) {
    res.sendFile(__dirname + '/locationreport.html');
});

app.get('/locationreport.js', function (req, res) {
    console.log('locationreport');
    res.sendFile(__dirname + '/locationreport.js')
});

// Person Report route
app.get('/personreport.html', function (req, res) {
    res.sendFile(__dirname + '/personreport.html');
});

app.get('/personreport.js', function (req, res) {
    console.log('personreport');
    res.sendFile(__dirname + '/personreport.js')
});

app.get('', function(req, res) {
    console.log('');
    res.sendFile();
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
