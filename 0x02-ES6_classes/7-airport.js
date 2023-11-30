export default class Airport(name, code) {
	constructor(name, code) {
		this._name = name;
		this._code = code;
	}

	get [Symbol.toStringTag]() {
		return this._code;
	}
}
