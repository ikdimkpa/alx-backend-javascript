export default class HolbertonCourse {
	constructor(name, length, students) {
		if (typeof name !== 'string') {
			throw new TypeError('Name must be a string');
			} else if (typeof length !== 'number') {
				throw new TypeError('Length must be a number');
			} else if (!Array.isArray || !students.every((student) => typeof student === 'string')) {
				throw new TypeError('String must be an array of strings');
			} else {
				this._name = name;
				this._length = length;
				this._students = students;
			}
		
	get name() {
		return this._name;
	}

	set name(newName) {
		if (typeof name !== 'string') {
			throw new TypeError('Name must be a string');
		}
		this._name = newName;
	}


	get length() {
		return this._length;
	}

	set length(newLength) {
		if (typeof length !== 'number') {
			throw new TypeError('Length must be a number');
		}
		this._length = newLength;
	}


	get student() {
		return this._students;
	}

	set student(newStudents) {
		if (!Array.isArray || !students.every((student) => typeof student === 'string')) {
			throw new TypeError('String must be an array of strings');
		}
		this._students = newStudents;
	}
}
