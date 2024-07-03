export default interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

export default interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

export default class Director implements DirectorInterface {
    workFromHome() {
        return "Working from home";
    }
    getCoffeeBreak() {
        return "Getting a coffee break";
    }
    workDirectorTasks() {
        return "Getting to director tasks";
    }
}

export default class Teacher implements TeacherInterface {
    workFromHome() {
        return "Cannot work from home";
    }
    getCoffeeBreak() {i
        return "Cannot have a break.";
    }
    workTeacherTasks() {
        return "Getting to work";
    }
}

export default function createEmployee(obj: number | string) {
    if (typeof obj === 'number' && obj < 500) {
        return new Teacher();
    }
    return new Director();
}

export default function executeWork(employee: DirectorInterface | TeacherInterface) {
    if (employee instanceof Director) {
        return employee.workDirectorTasks();
    }
    if (employee instanceof Teacher) {
        return employee.workTeacherTasks();
    }

}

export default type Subjects = "Math" | "History";

export default function teachClass(todayClass: Subjects) {
    if (todayClass === "Math") {
        console.log("Teaching Math");
    } else {
        console.log("Teaching History");
    }
}
