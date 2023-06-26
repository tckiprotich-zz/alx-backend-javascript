/**
 * Calculates the sum of initialNumber, expansion1989 and expansion2019.
 * @param {number} initialNumber - The initial number to be added.
 * @param {number} expansion1989 - The number to be added to initialNumber representing the expansion in 1989. Default value is 89.
 * @param {number} expansion2019 - The number to be added to initialNumber representing the expansion in 2019. Default value is 19.
 * @returns {number} The sum of initialNumber, expansion1989 and expansion2019.
 */
export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
    return initialNumber + expansion1989 + expansion2019;
  }
  