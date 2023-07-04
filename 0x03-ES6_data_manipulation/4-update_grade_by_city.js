/**
 * Updates the grade of students in a given city based on their ID.
 * @param {Array} students - An array of student objects.
 * @param {string} city - The city to filter students by.
 * @param {Array} newGrades - An array of objects containing student IDs and their new grades.
 * @returns {Array} An array of updated student objects.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (students instanceof Array) {
    return students
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || defaultGrade).grade,
      }));
  }
  return [];
}
