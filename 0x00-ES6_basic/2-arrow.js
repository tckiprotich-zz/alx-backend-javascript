/**
 * Defines a function that returns a list of San
 * Francisco neighborhoods and allows adding new neighborhoods to the list.
 * @returns {function} A function that returns an
 * array of San Francisco neighborhoods and allows adding new neighborhoods to the list.
 */
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}
