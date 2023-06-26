/**
 * Returns an object containing the income, gdp, and capita values passed as arguments.
 *
 * @param {number} income - The income value to be included in the budget object.
 * @param {number} gdp - The gdp value to be included in the budget object.
 * @param {number} capita - The capita value to be included in the budget object.
 * @returns {object} - An object containing the income, gdp, and capita values.
 */
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}
