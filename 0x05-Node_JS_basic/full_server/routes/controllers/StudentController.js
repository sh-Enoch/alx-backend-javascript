import readDatabase from '../utils';

export default class Studentcontroller {
  static getAllStudents(req, res) {
    readDatabase('./database.json')
      .then((data) => {
        const students = JSON.parse(data);
        return res.status(200).json(students);
      })
      .catch((err) => res.status(500).json({ error: err }));
  }

  static getAllStudentsByMajor(req, res) {
    readDatabase('./database.json')
      .then((data) => {
        const students = JSON.parse(data);
        const studentsByMajor = students.filter((student) => student.major === req.params.major);
        return res.status(200).json(studentsByMajor);
      })
      .catch(() => res.status(500).send('Cannot load the database'));
  }
}
