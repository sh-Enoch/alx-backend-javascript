const express = require('express');
const { argv } = require('process');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello ALX!');
});

app.get('/students', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');

  // Ensure the file path is provided
  if (!argv[2]) {
    res.status(400).send('Database file path not provided');
    return;
  }

  // Read the file asynchronously
  fs.readFile(argv[2], 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Cannot load the database');
      return;
    }

    try {
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length <= 1) {
        res.status(500).send('Database is empty or invalid');
        return;
      }

      const students = [];
      lines.slice(1).forEach((line) => {
        const fields = line.split(',');
        if (fields.length >= 4) {
          students.push({ firstname: fields[0], field: fields[3] });
        }
      });

      res.write(`Number of students: ${students.length}\n`);

      const fieldGroups = {};
      students.forEach((student) => {
        if (!fieldGroups[student.field]) fieldGroups[student.field] = [];
        fieldGroups[student.field].push(student.firstname);
      });

      Object.keys(fieldGroups).forEach((field) => {
        const studentNames = fieldGroups[field].join(', ');
        res.write(
          `Number of students in ${field}: ${fieldGroups[field].length}. List: ${studentNames}\n`
        );
      });

      res.end();
    } catch (error) {
      res.status(500).send('An error occurred while processing the database');
    }
  });
});

// Start the server
app.listen(1245);

module.exports = app;

