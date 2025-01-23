const http = require('http');
const fs = require('fs').promises;

// Fonction pour lire et traiter les données des étudiants
async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length < 2) {
      throw new Error('File does not contain valid data');
    }

    const students = lines.slice(1); // ignorer l'en tete
    const fields = {};

    students.forEach((student) => {
      const studentData = student.split(',');

      if (studentData.length >= 4) {
        const firstName = studentData[0].trim();
        const field = studentData[3].trim();

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      }
    });

    let result = `Number of students: ${students.length}`;
    for (const [field, names] of Object.entries(fields)) {
      result += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
    }

    return result;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

// cree le serv http
const port = 1245;

const requestListener = async (req, res) => {
  if (req.url === '/') {
    // route principale
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    // route de students
    res.setHeader('Content-Type', 'text/plain');

    try {
      const databasePath = process.argv[2]; // 
      // chemin du fichier passr en argument
      const studentData = await countStudents(databasePath);

      res.statusCode = 200;
      res.end(`This is the list of our students\n${studentData}`);
    } catch (err) {
      res.statusCode = 500;
      res.end('This is the list of our students\nCannot load the database');
    }
  } else {
    // route ???
    res.statusCode = 404;
    res.end('Not Found');
  }
};

// cree le serveur
const app = http.createServer(requestListener);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
