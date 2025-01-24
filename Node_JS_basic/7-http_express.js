const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

// conter les students
async function countStudents(database) {
  try {
    const data = await fs.readFile(database, 'utf8');
    const lines = data
      .trim()
      .split('\n')
      .filter((line) => line.trim() !== '')
      .slice(1); // supprime l'en tete

    const students = lines.map((line) => line.split(',')).filter((student) => student.length === 4);

    const studentsByField = students.reduce((acc, [firstName, , , field]) => {
      const trimmedField = field.trim();
      if (!acc[trimmedField]) acc[trimmedField] = [];
      acc[trimmedField].push(firstName);
      return acc;
    }, {});

    let result = `Number of students: ${students.length}\n`;
    for (const [field, names] of Object.entries(studentsByField)) {
      result += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    }

    return result.trim(); // supprimer les espaces inutiless
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

// roue principale
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// students route
app.get('/students', async (req, res) => {
  const database = process.argv[2];

  res.write('This is the list of our students\n'); // cette ligne dois reste afficher meme en cas d'erreur

  if (!database) {
    res.status(500).end('Cannot load the database');
    return;
  }

  try {
    const studentsData = await countStudents(database);
    res.end(studentsData); // Ajoute les informations sur les étudiants
  } catch (error) {
    res.end('Cannot load the database');
  }
});

// start le serv
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
