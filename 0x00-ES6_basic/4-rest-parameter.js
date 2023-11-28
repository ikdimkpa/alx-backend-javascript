export default function returnHowManyArguments(...args) {
	for (arg of args) {
		sum += 1;
	}
	return sum;
}
