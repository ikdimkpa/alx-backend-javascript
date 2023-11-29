export default guardrail(mathFunction) {
	let queue = [];
	try {
		const solution = mathFunction();
		return queue.push(solution);
	} catch(error) {
		queue.push(`Error: ${error}`);
	} finally {
		queue.push('Guardrail was processed');
	}
	return queue;
}
