/**
 * Updates the values of a Map object by replacing the values of keys with a value
 *  of 1 with a value of 100.
 * @param {Map} map - The Map object to be updated.
 * @throws {Error} Will throw an error if the argument passed is not a Map object.
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
}
