/**
 * Initializes an array of ClassRoom objects with the given capacities.
 * @returns {Array} An array of ClassRoom objects.
 */
import ClassRoom from './0-classroom';

/**
 * Creates an array of {@link ClassRoom}s with a specific size.
 * @returns An array of {@link ClassRoom}s.
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
