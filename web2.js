const http = require('http');

const routes = {
  '/info': '<h1>Info Page</h1>',
  '/about': '<h1>Learn More About Us</h1>',
  '/contact': '<h1>Contact Us</h1>',
};

const port = 4000;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  if (routes[req.url]) {
    res.end(routes[req.url]);
  } else {
    res.end('<h1>Welcome!</h1>');
  }
});

app.listen(port);

console.log(`Server running on port number: ${port}`);