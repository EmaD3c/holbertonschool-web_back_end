const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

async function countStudents(database) {
  try {
    const data = await fs.readFile(database, 'utf8');
    console.log('data:', data);

    const lines = data.split('\n')
      .filter(line => line.trim() !== '')
      .slice(1); // delete len tete

    console.log('lignes:', lines);

    const students = lines.map(line => line.split(','))
      .filter(student => student.length === 4);

    console.log('Students:', students);

    const studentsByField = students.reduce((acc, [firstName, , , field]) => {
      // delete white space
      const trimmedField = field.trim();
      if (!acc[trimmedField]) acc[trimmedField] = [];
      acc[trimmedField].push(firstName);
      return acc;
    }, {});

    console.log('Students par domaine:', studentsByField);

    const csStudents = studentsByField['CS'] || [];
    const sweStudents = studentsByField['SWE'] || [];

    let result = `Number of students: ${students.length}\n`;
    result += `Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\n`;
    result += `Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`;

    return result;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const database = process.argv[2];
  if (!database) {
    return res.status(500).send('Database file path is missing');
  }

  try {
    const studentsData = await countStudents(database);
    res.send(`This is the list of our students\n${studentsData}`);
  } catch (error) {
    res.status(500).send('This is the list of our students\n', error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
