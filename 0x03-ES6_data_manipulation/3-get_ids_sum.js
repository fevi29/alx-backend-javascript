export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce((a, b) => a + b.id, 0);
  }
  return 0;
}
