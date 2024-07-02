export default function getListStudentIds(args) {
  if (typeof args !== 'object') {
    return [];
  }
  function studentId(student) {
    return student.id;
  }
  return args.map(studentId);
}
