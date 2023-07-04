/**
 * Returns an array of students filtered by location.
 * @param {Array} students - The array of student objects to filter.
 * @param {string} city - The location to filter by.
 * @returns {Array} - An array of student objects filtered by location.
 */
export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
