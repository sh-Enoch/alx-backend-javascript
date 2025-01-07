import fs from 'fs';

export default function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      }
      resolve((data) => {
        // read file and extract all student names from data read from the csv file
        const students = [];
        const lines = data.split('\n');
        for (let i = 1; i < lines.length; i += 1) {
          const fields = lines[i].split(',');
          if (fields.length > 3) {
            students.push(fields[0]);
          }
        }
        // remove the last empty line
        students.pop();
        // return the list of students
        return students;

      });
    });
  });
}
