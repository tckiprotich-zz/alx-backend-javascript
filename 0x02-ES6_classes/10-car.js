/**
 * Represents a Car object.
 * @class
 */
export default class Car {
  /**
     * Creates a Car object.
     * @constructor
     * @param {string} brand - The brand of the car.
     * @param {string} motor - The motor of the car.
     * @param {string} color - The color of the car.
     */
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  /**
     * Gets the brand of the car.
     * @returns {string} The brand of the car.
     */
  get brand() {
    return this._brand;
  }

  /**
     * Sets the brand of the car.
     * @param {string} value - The brand of the car.
     */
  set brand(value) {
    this._brand = value;
  }

  /**
     * Gets the motor of the car.
     * @returns {string} The motor of the car.
     */
  get motor() {
    return this._motor;
  }

  /**
     * Sets the motor of the car.
     * @param {string} value - The motor of the car.
     */
  set motor(value) {
    this._motor = value;
  }

  /**
     * Gets the color of the car.
     * @returns {string} The color of the car.
     */
  get color() {
    return this._color;
  }

  /**
     * Sets the color of the car.
     * @param {string} value - The color of the car.
     */
  set color(value) {
    this._color = value;
  }

  /**
     * Gets the species of the Car class.
     * @returns {Object} The Car class.
     */
  static get [Symbol.species]() {
    return this;
  }

  /**
     * Clones the Car object.
     * @returns {Object} A new instance of the Car object.
     */
  cloneCar() {
    const Species = this.constructor[Symbol.species];

    return new Species();
  }
}
