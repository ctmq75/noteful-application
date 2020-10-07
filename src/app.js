
require('dotenv').config();
const express = require('express');
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet');
const { NODE_ENV } = require('./config.js');
const nRouter = require('./notes/notes-router.js');
const fRouter = require('./folders/folders-router.js');


const app = express();

 const morganSetting = NODE_ENV === 'production' ? 'tiny' : 'common'
 app.use(morgan(morganSetting))
app.use(helmet());
app.use(cors());

app.use('/api/notes', nRouter);
app.use('/api/folders', fRouter);

app.get('/', (req, res) => {
  res.send('Hello, noteful users!');
});

app.use((error, req, res, next) => {
  let response
  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error editeddd' }}
  } else {
    response = { error }
  }
  res.status(500).json(response)
})


module.exports = app;

/*

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production') {
    console.error(error);
     response = { error: { message: 'server erroRRRRr' }};
  } else {
    console.error(error);
    response = { error, message: error.message };
   }
   res.status(500).json(response);
 });






 */