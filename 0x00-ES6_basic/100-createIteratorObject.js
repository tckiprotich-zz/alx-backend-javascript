/**
 * A generator function that creates an iterator object for all employees in a report.
 * @param {Object} report - The report object containing all employees.
 * @yields {Object} The next employee object in the report.
 */
export default function createIteratorObject(report) {
  return (function* _() {
    for (const department of Object.values(report.allEmployees)) {
      for (const employee of department) {
        yield employee;
      }
    }
  }());
}
