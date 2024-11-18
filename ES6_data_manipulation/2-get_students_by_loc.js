export default function getStudentsByLocation(objetstudent, city) {
  // Utilise filter pour sélectionner les étudiants de la ville spécifiée
  return objetstudent.filter((student) => student.location === city);
}
