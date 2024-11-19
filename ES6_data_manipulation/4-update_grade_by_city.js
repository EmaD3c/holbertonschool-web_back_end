export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city) // garde les étudiants de la ville choisie
    .map((student) => {
      // cherche la note dans newGrades qui correspond à l'étudiant
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      // retourne un nouvel objet étudiant avec la note ou "N/A"
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A', // Opérateur ternaire pour simplifier l'ajout de la note
      };
    });
}
