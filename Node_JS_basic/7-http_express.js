const express = require('express');
const fs = require('fs');
const util = require('util');

const app = express();
const port = 1245;

// convertion de fs.readfile en asynchrone
const readFileAsync = util.promisify(fs.readFile);

// lire csv
async function countStudents(database) {
  try {
    const content = await readFileAsync(database, 'utf8');
    const lines = content
      .split('\n')
      .filter((line) => line.trim() !== '');

    if (lines.length <= 1) throw new Error('Database is empty');

    lines.shift(); // remove header
    const students = lines
      .map((line) => line.split(','))
      .filter((cols) => cols.length === 4);

    const fields = {};
    students.forEach(([firstname, field]) => {
      if (!fields[field]) fields[field] = [];
      fields[field].push(firstname.trim());
    });

    const totalStudents = students.length;
    let result = `Number of students: ${totalStudents}\n`;

    for (const [field, names] of Object.entries(fields)) {
      result += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    }

    return result.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

// endpoint principal
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// endpoint students
app.get('/students', async (req, res) => {
  const database = process.argv[2]; // recupere le chemin vers la database grace a l'argument
  if (!database) {
    res.status(500).send('Database file path is missing');
    return;
  }

  try {
    const studentsData = await countStudents(database);
    res.send(`This is the list of our students\n${studentsData}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// cree le serveur
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
