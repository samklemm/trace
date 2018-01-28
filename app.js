'use strict';

// [START app]
var path = require('path');
var Knex = require('knex');
var express = require('express');

var app = express();

app.enable('trust proxy');

// Index route
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/index.js', function (req, res) {
    console.log('index');
    res.sendFile(__dirname + '/index.js')
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

// Person Report ExportImport
app.get('/exportimport.js', function (req, res) {
    console.log('person report exportimport');
    res.sendFile(__dirname + '/exportimport.js')
});

// Location Report ExportImport
app.get('/exportimport2.js', function (req, res) {
    console.log('location report exportimport');
    res.sendFile(__dirname + '/exportimport2.js')
});

app.get('', function(req, res) {
    console.log('');
    res.sendFile();
});

app.use(express.static(path.join(__dirname, 'public')));

var knex = connect();

function connect () {
  const config = {
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE
  };

  if (process.env.INSTANCE_CONNECTION_NAME && process.env.NODE_ENV === 'production') {
    config.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
  }

  // Connect to the database
  const knex = Knex({
    client: 'mysql',
    connection: config
  });

  return knex;
}

var loc = require('./exportimport2').loc;
var per = require('./exportimport').per;

/**
 * Insert a location record into the database.
 *
 * @param {object} knex The Knex connection object.
 * @param {object} location The location record to insert.
 * @returns {Promise}
 */
function insertLocation (knex, location) {
  return knex('location').insert(location);
}

/**
 * Insert a person record into the database.
 *
 * @param {object} knex The Knex connection object.
 * @param {object} person The location record to insert.
 * @returns {Promise}
 */
function insertPerson (knex, person) {
    console.log('inserting person');
    return knex('person').insert(person);
  }

app.get('/exportimport2.js', (req, res, next) => {
    // Create a location record to be stored in the database
    const location = JSON.parse(loc);
    console.log('parsed json');
    insertLocation(knex, location)
    .catch((err) => {
        console.log('location inserted unsucessfully');
        next(err);
    });
    console.log('location inserted successfully');
});

app.get('/exportimport.js', (req, res, next) => {
    // Create a person record to be stored in the database
    const person = JSON.parse(per);
  
    insertVisit(knex, person)
      .catch((err) => {
        next(err);
      });
  });

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
