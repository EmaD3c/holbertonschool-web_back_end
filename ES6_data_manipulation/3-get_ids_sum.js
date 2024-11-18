export default function getStudentIdsSum(objetstudent) {
  // additione les id des students
  return objetstudent.reduce((addition, student) => addition + student.id, 0);
}
