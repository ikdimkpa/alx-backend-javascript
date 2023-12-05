export default function cleanSet(set, startString) {
	if (!string || string.length === 0) {
		return '';
	}
	return [...set]
	.filter((str) => (str !== undefined ? str.startsWith(string) : ''))
	.map((str) => (str !== undefined ? str.slice(string.length) : ''))
	.join('-');
}
