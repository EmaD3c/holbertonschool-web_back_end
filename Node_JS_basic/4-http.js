const http = require('http');

// Hôte et port du serveur
const port = 1245;

const requestListener = (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;
  res.end('Hello Holberton School!'); // reponse
};

const app = http.createServer(requestListener);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
