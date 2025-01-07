const express = require('express');
const fs = require('fs').promises;

const countStudents = (path) => fs.readFile(path, 'utf8')
  .then((data) => {
    const lines = data.trim().split('\n').filter(Boolean); // Remove empty lines
    if (lines.length <= 1) {
      throw new Error('No student data found in the database');
    }

    const fields = {};
    for (const line of lines.slice(1)) { // Exclude header line
      const student = line.split(',');
      if (!fields[student[3]]) {
        fields[student[3]] = [];
      }
      fields[student[3]].push(student[0]);
    }

    return { lines, fields };
  })
  .catch(() => {
    throw new Error('Cannot load the database');
  });

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then(({ lines, fields }) => {
      let output = 'This is the list of our students\n';
      output += `Number of students: ${lines.length - 1}\n`;
      for (const [field, names] of Object.entries(fields)) {
        output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }
      res.send(output);
    })
    .catch((error) => {
      res.status(500).send(`This is the list of our students\n${error.message}`);
    });
});

app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;

