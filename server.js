const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const apiKey = '4d9dd3f2346379459d28284bbed32c93';

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended:true}));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
})

app.post('/', function (req, res) {
  res.render('index');
  console.log(req.body.city);
})

app.listen(3000, function () {
  console.log('Weather app listening on port 3000!');
})

