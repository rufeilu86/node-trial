const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(`${__dirname}/views/partials`);
app.set('view engine', 'hbs');
app.use(express.static(__dirname));

hbs.registerHelper('currentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('caps', (text) =>{
  return text.toLowerCase();
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About page'
  });
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'About page',
    welcomeMessage: 'Rufei Lu'
  });
});

app.listen(3000, () => {
  console.log('It is done');
});
