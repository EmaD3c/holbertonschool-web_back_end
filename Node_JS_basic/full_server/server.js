const express = require('express');
const router = require('./routes/index');

const app = express();
const port = 1245;

// Utilisation des routes définies dans routes/index.js
app.use('/', router);

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
