import readDatabase from '../utils.js';

export default class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const studentsData = await readDatabase(process.argv[2]);
      const fields = Object.keys(studentsData).sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase())
      );

      let result = 'This is the list of our students\n';
      for (const field of fields) {
        const students = studentsData[field];
        result += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      }

      res.status(200).send(result.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const studentsData = await readDatabase(process.argv[2]);
      const students = studentsData[major] || [];

      const result = `List: ${students.join(', ')}`;
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}
