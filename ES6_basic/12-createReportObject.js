export default function createReportObject(employeesList) {
  // le code renvoie la liste des objets de employeesList & le nombre de clés
    return {
      // all Employees stocke les objets stocké dans employeesList
      allEmployees: { ...employeesList },
      getNumberOfDepartments() {
        // retourne le nombre de key dans employeesList
        return Object.keys(employeesList).length;
      },
    };
  }
