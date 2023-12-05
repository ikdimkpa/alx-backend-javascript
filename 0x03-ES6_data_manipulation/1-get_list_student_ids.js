export default function getListStudentIda() {
	if (Array.isArray) {
		return array.map((obj) => obj.id);
	}
	return [];
}
