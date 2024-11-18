export default function getListStudentIds(objet_student) {
  // verrifie que l'objet est un tableau
  if (!Array.isArray(objet_student)){
    return[]
  }

  // map cree un tableau avec les id des students
  return objet_student.map(student => student.id);
}
