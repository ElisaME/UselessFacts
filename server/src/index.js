const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

//DB
mongoose
  .connect('mongodb://localhost/NXTIoT-Challenge', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

//Settings
app.set('port', process.env.port || 3000)

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//Routes
const index = require('./routes/index');
app.use('/', index);

//Static
app.use(express.static(path.join(__dirname, 'public')));

//Server is listening
app.listen(app.get('port'), ()=> {
  console.log('Listening in http://localhost:' + app.get('port'))
})