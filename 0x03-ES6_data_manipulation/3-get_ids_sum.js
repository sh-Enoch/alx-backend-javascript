export default function getStudentIdsSum(listOfStudents) {
    const sumOfIds = listOfStudents.reduce(function (accumulator, item){
        return accumulator + item.id;

    }, 0)
}
