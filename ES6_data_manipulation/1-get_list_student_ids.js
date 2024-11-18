export default function getListStudentIds(objetstudent) {
  // verrifie que l'objet est un tableau
  if (!Array.isArray(objetstudent)) {
    return [];
  }

  // map cree un tableau avec les id des students
  return objetstudent.map((student) => student.id);
}
