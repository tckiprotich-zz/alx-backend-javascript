/**
 * A generator function that creates an iterator object for all employees in a report.
 * @param {Object} report - The report object containing all employees.
 * @yields {Object} The next employee object in the report.
 */
export default function iterateThroughObject(reportWithIterator) {
    const employees = [];
  
    for (const employee of reportWithIterator) {
      employees.push(employee);
    }
  
    return employees.join(' | ');
  }
