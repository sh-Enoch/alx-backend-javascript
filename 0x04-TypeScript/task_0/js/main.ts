export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1 : Student = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    location: "Lagos"
}

const student2 : Student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 22,
    location: "Lagos"
}

const studentList Student[] = [student1, student2];

const table = document.createElement('table');

const headerRow = table.insertRow();
const nameHeader = headerRow.insertCell();
const locationHeader = headerRow.insertCell();
nameHeader.textContent = "First Name";
locationHeader.textContent = "Location";

studentList.forEach(student => {
    const row = table.insertRow();
    const nameCell = row.insertCell();
    const locationCell = row.insertCell();

    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
});
document.body.appendChild(table);
