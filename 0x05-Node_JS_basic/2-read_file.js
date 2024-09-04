const fs = require('fs');

const countStudents = function (path) {
    
    try {
        const data = fs.readFileSync(path, 'utf8');
        const lines = data.split('\n').filter(line => line.trim() !== '');
        const students = lines.slice(1);
        console.log(`Number of students: ${students.length}`);
        const fields = {};
        students.forEach(student => {
            const [firstname, , ,field] = student.split(', ');
            if (!fields[field]) {
                fields[field] = [];
            }
        }

    });
}
