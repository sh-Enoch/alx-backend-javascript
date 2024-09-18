const fs = require('fs');

const countStudents = (path) => {
   try {
       const data = fs.readFile(path, { encoding: 'utf8'});
       console.log(data);
   } catch (err) {
       console.log(err);
   }
}
module.exports = countStudents;
