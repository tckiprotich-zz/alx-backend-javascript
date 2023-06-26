/**
 * Defines a function that returns a list of neighborhoods in San Francisco and allows adding new neighborhoods to the list.
 * @returns {function} A function that returns an array of neighborhoods in San Francisco and allows adding new neighborhoods to the list.
 */
export default function getNeighborhoodsList() {
    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
  
    this.addNeighborhood = (newNeighborhood) => {
      this.sanFranciscoNeighborhoods.push(newNeighborhood);
      return this.sanFranciscoNeighborhoods;
    };
  }
