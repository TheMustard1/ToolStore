const ejs = require('ejs');

const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get('/', function (req, res) {
  res.render("pages/index");
})

app.get('/about', function (req, res) {
  res.render("pages/about");
})

app.get('/stock', function (req, res) {
  res.render("pages/stock");
})

app.get('/contact', function (req, res) {
  res.render("pages/contact");
})

app.listen(3000)