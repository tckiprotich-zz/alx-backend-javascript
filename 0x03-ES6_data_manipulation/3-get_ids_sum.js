/**
 * Calculates the sum of the ids of an array of student objects.
 * @param {Array} students - The array of student objects.
 * @returns {number} - The sum of the ids of the student objects.
 */
export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (prevStudent, curStudent) => prevStudent.id || prevStudent + curStudent.id,
      0,
    );
  }
  return 0;
}
