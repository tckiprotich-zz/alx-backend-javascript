/**
 * Returns a Map object containing a list of groceries with their respective quantities.
 *
 * @returns {Map} A Map object with grocery items as keys and their respective quantities as values.
 */
export default function groceriesList() {
  const values = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];
  return new Map(values);
}
