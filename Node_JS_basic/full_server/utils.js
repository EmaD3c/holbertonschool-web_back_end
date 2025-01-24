const fs = require('fs').promises;

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== ''); // filtrer les lignes vides

    if (lines.length < 2) {
      throw new Error('File does not contain valid data');
    }

    const students = lines.slice(1); // ignore len tete
    const fields = {};

    students.forEach((student) => {
      const studentData = student.split(',');

      if (studentData.length >= 4) {
        const firstName = studentData[0].trim();
        const field = studentData[3].trim();

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName); // ajouter le prenom au field
      }
    });

    return fields;
  } catch (err) {
    throw new Error('Cannot load the database'); // Rejeter en cas d'erreur
  }
}

module.exports = readDatabase;
