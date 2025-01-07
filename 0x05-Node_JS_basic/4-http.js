const http = require('http');
const fs = require('fs').promises;

const countStudents = (path) => fs.readFile(path, 'utf8')
  .then((data) => {
    const lines = data.trim().split('\n').filter(Boolean); // Remove empty lines

    const fields = {};
    for (const line of lines.slice(1)) { // Exclude header line
      const student = line.split(',');
      if (!fields[student[3]]) {
        fields[student[3]] = [];
      }
      fields[student[3]].push(student[0]);
    }

    // for (const [field, names] of Object.entries(fields)) {
    //   console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    // }

    return { lines, fields };
  })
  .catch(() => {
    throw new Error('Cannot load the database');
  });

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    countStudents(process.argv[2])
      .then(({ lines, fields }) => {
        res.write('This is the list of our students\n');
        res.write(`Number of students: ${lines.length}\n`);
        for (const [field, names] of Object.entries(fields)) {
          res.write(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`);
        }
        res.end();
      })
      .catch((error) => {
        res.write(`This is the list of our students\n${error.message}`);
        res.end();
        throw new Error('Cannot load the database');
      });
  }
});

app.listen(1245);

module.exports = app;
