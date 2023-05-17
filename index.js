const express = require('express');

// Create an instance of express app
const app = express();

// Listen for requests
app.listen(8000);

app.get('/', (req, res) => {
  res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  res.sendFile('./views/about.html', { root: __dirname });
});

app.get('/contact', (req, res) => {
  res.sendFile('./views/contact-me.html', { root: __dirname });
});

app.get('/contact-me', (req, res) => {
  res.redirect('/contact');
});

app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname });
});
