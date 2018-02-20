const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin@ds115758.mlab.com:15758/mongoosetest');

const Cat = mongoose.model('Cat', {name: String});

const app = express();

app.get('/kittens', (req, res) => {
  
})

app.listen(3000, () => {
  console.log("Listening on port", 3000);
})