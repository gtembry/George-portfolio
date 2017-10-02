'use strict'

const EXPRESS = require('express');
const PG = require('pg');
const PARSER = require('body-parser');

const APP = EXPRESS();
const conString = `${process.env.DATABASE_URL}`;
const PORT = process.env.PORT || 3000;
const CLIENT = new PG.Client(CON_STRING);

APP.use(PARSER.json());
APP.use(PARSER.urlencoded({ extended: true }));

app.get('*', function(request, response) {
  response.sendFile('index.html',{root: './publc'});
});

APP.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
