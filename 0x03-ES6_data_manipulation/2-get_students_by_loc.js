export default function getStudentsByLocation (listOfStudents, city) {
    const locatedInCity = listOfStudents.filter((item) => item.location === city);
    return locatedInCity;
    // returns an array of objects
}
