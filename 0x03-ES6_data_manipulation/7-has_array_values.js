export default function (set, array) {
	let finish = false;
	array.map((i) => {
		if (set.has(i)) {
			finish = true;
		}
	});

	return finish;
}
