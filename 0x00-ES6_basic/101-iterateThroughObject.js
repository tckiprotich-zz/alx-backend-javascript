/**
 * This function takes an iterable object and iterates through it using a for...of loop.
 * It pushes each element of the iterable object into an array and returns a string with all the elements joined by a pipe character.
 * @param {Iterable} reportWithIterator - The iterable object to be iterated through.
 * @returns {string} - A string with all the elements of the iterable object joined by a pipe character.
 */
export default function iterateThroughObject(reportWithIterator) {
    const employees = [];
  
    for (const employee of reportWithIterator) {
      employees.push(employee);
    }
  
    return employees.join(' | ');
  }