const http = require('http');
const app = require('express');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Set header content type
  res.setHeader('Content-Type', 'text/html');

  let path = './views/';

  switch (req.url) {
    case '/': {
      path += 'index.html';
      res.statusCode = 200;
      break;
    }
    case '/about': {
      path += 'about.html';
      res.statusCode = 200;
      break;
    }
    case '/contact': {
      path += 'contact-me.html';
      res.statusCode = 200;
      break;
    }
    case '/contact-me': {
      res.statusCode = 301;
      res.setHeader('Location', '/contact');
      res.end();
      break;
    }
    default: {
      path += '404.html';
      res.statusCode = 404;
      break;
    }
  }

  //   Read and send html data
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(8000);
