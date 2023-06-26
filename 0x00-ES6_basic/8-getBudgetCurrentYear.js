/**
 * Returns the current year.
 * @returns {number} The current year.
 */
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

/**
 * Returns a budget object for the current year.
 * @param {number} income - The income for the current year.
 * @param {number} gdp - The GDP for the current year.
 * @param {number} capita - The capita for the current year.
 * @returns {object} A budget object for the current year.
 */
export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };

  return budget;
}
