/**
 * Creates a new Int8Array with the specified length, sets the value at the specified
 *  position, and returns it as a DataView.
 * @param {number} length - The length of the Int8Array to create.
 * @param {number} position - The position to set the value at.
 * @param {number} value - The value to set at the specified position.
 * @throws {Error} If the position is outside the range of the Int8Array.
 * @returns {DataView} A DataView representing the Int8Array with the specified value set
 *  at the specified position.
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buf = new DataView(new ArrayBuffer(length), 0, length);
  buf.setInt8(position, value);
  return buf;
}
