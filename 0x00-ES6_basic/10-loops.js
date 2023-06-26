/**
 * Appends a string to each value in an array and returns the modified array.
 *
 * @param {Array} array - The array to modify.
 * @param {string} appendString - The string to append to each value in the array.
 * @returns {Array} The modified array with the string appended to each value.
 */
export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) {
    value = appendString + value;
  }

  return array;
}
