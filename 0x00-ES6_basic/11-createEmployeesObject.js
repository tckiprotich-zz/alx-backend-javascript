/**
 * Creates an object with a department name as key and an array of employees as value.
 * @param {string} departmentName - The name of the department.
 * @param {Array} employees - An array of employees.
 * @returns {Object} An object with a department name as key and an array of employees as value.
 */
export default function createEmployeesObject(departmentName, employees) {
  const employeesObject = {
    [departmentName]: employees,
  };

  return employeesObject;
}
