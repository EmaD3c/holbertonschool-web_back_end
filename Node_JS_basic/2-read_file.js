const fs = require('fs');

function countStudents(path) {
  try {
    const contents = fs.readFileSync(path, 'utf8');

    // split les donnee
    const lines = contents.split('\n').filter((line) => line.trim() !== '');

    // check si ya des donnee
    if (lines.length < 2) {
      throw new Error('File does not contain valid data');
    }

    const students = lines.slice(1);
    const fields = {};

    students.forEach((student) => {
      const studentData = student.split(',');

      // verifier que la ligne a assez de colones
      if (studentData.length >= 4) {
        const firstName = studentData[0].trim();
        const field = studentData[3].trim();

        // mettre le students dans le champs qui coresspond
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      }
    });

    console.log(`Number of students: ${students.length}`);

    // affiche les students
    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
