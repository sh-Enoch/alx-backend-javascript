interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

interface Director extends Teacher {
    numberOfReports: number;
}

interface printTeacher {
    (firstName: string, lastName: string): string ;
}

export interface StudentConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}

export interface StudentClassInterface {
  displayName(): string;
  workOnHomework(): string;
}

