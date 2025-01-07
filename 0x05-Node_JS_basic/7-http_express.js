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

  // Check if a file path is provided
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

    const lines = data.split('\n').filter((line) => line.trim() !== '');
    if (lines.length <= 1) {
      res.status(500).send('Database is empty or invalid');
      return;
    }

    const headers = lines[0].split(',');
    const students = lines.slice(1).map((line) => {
      const values = line.split(',');
      if (values.length !== headers.length) {
        return null; // Ignore malformed lines
      }
      return headers.reduce((student, header, index) => {
        student[header.trim()] = values[index].trim();
        return student;
      }, {});
    }).filter((student) => student !== null); // Remove null entries

    res.write(`Number of students: ${students.length}\n`);

    const fields = {};
    students.forEach((student) => {
      const field = student.field;
      if (!fields[field]) fields[field] = [];
      fields[field].push(student.firstname);
    });

    Object.keys(fields).forEach((field) => {
      const studentNames = fields[field].join(', ');
      res.write(`Number of students in ${field}: ${fields[field].length}. List: ${studentNames}\n`);
    });

    res.end();
  });
});

// Listen on port 1245
app.listen(1245);

module.exports = app;

