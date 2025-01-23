const express = require('express');

const app = express();
const port = 1245;

// roude endppoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// start le serv
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
