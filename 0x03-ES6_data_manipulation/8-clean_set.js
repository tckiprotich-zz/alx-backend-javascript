/**
 * Returns a string of all the values in a Set that start with a given string,
 *  with the starting string removed.
 * @param {Set} set - The Set to clean.
 * @param {string} startString - The string that the values in the Set should start with.
 * @returns {string} A string of all the cleaned values in the Set, joined by hyphens.
 */
export default function cleanSet(set, startString) {
  const parts = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr && valueSubStr !== value) {
        parts.push(valueSubStr);
      }
    }
  }
  return parts.join('-');
}
