export default class HolbertonCourse {
	constructor(name, length, students) {
		if (typeof name !== 'string') throw new TypeError('Name must be a string');
		if (!Number.isInteger(length)) throw new TypeError('Length must be a number');
		if (!Array.isArray(student)) throw new TypeError('String must be an array of strings');

		this._name = name;
		this._length = length;
		this._students = students;
	}
			

	get name() {
		return this._name;
	}

	set name(newName) {
		if (typeof name !== 'string') throw new TypeError('Name must be a string');
		this._name = newName;
	}


	get length() {
		return this._length;
	}

	set length(newLength) {
		if (!Number.isInteger) throw new TypeError('Length must be a number');
		this._length = newLength;
	}


	get student() {
		return this._students;
	}

	set student(newStudents) {
		if (!Array.isArray(newStudents)) throw new TypeError('String must be an array of strings');
		this._students = newStudents;
	}
}
