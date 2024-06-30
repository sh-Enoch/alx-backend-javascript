export default class Holberton {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = newName;
    }
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = value;
    }
  }

  get students() {
    return this._students;
  }

  set students(stringArray) {
    if (typeof stringArray !== 'object') {
      throw new TypeError('Array!!!');
    } else {
      for (const student in stringArray) {
        if (typeof student !== 'string') {
          throw new TypeError('student must be string');
        } else {
          this._students = stringArray;
        }
      }
    }
  }
}
