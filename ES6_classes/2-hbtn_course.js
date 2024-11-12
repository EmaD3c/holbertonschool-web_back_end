export default class HolbertonCourse {
  constructor(name, length, students) {
    // Validate 'name' as a string
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    // Validate 'length' as a number
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    // Validate 'students' as an array of strings
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }

    // Set private properties
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter and setter for 'name' attribute
  get name() {
    return this._name;
  }

  set name(newName) {
    // Ensure new 'name' value is a string
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // Getter and setter for 'length' attribute
  get length() {
    return this._length;
  }

  set length(newLength) {
    // Ensure new 'length' value is a number
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  // Getter and setter for 'students' attribute
  get students() {
    return this._students;
  }

  set students(newStudents) {
    // Ensure 'students' is an array of strings
    if (!Array.isArray(newStudents) || !newStudents.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = newStudents;
  }
}
