export default function appendToEachArrayValue(array, appendString) {
	const auxArray = [];

	  for (let idx of array) {
		      auxArray.push(appendString + idx);
		    }

	  return auxArray;
}
