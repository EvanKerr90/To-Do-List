const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session')
const app = express();
const settings = require("../settings"); 

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))

const knex = require('knex')({
  client: 'pg',
  connection: {
    host: settings.hostname,
    user: settings.user,
    password: settings.password,
    database: settings.database
  }
});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('view engine', 'ejs');


const database = require("./lib/database.js")(knex);

//const postsRoutes = require("./routes/posts")(database);



app.get('/', function (req, res) {
  res.render('index');
})

app.post('/', function (req, res) {


})


app.listen(3000, function () {
  console.log('to-do listening on port 3000!');
})