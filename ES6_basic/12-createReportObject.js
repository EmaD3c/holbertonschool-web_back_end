export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList, // allEmployees contient l'objet employeesList passé en paramètre
    getNumberOfDepartments() {
      return Object.keys(employeesList).length; // retourne le nombre de départements
    }
  };
}
