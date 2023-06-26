/**
 * Creates a report object with all employees and the number of departments.
 * @param {Object} employeesList - An object containing employees information.
 * @returns {Object} - A report object with all employees and the number of departments.
 */
export default function createReportObject(employeesList) {
  const allEmployees = {
    ...employeesList,
  };

  const reportObject = {
    allEmployees,
    getNumberOfDepartments() {
      return Object.keys(allEmployees).length;
    },
  };

  return reportObject;
}
