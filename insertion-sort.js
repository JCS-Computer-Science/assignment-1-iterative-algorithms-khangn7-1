function insertionSort(array) {
	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */
	let n = array.length;
	for (let i = 1; i < n; i++) {
		let j = i;
		while (array[j] < array[j - 1] && j > 0) {
			let tmp = array[j];
			array[j] = array[j - 1];
			array[j - 1] = tmp;
			j--;
		}
	}

	return array;
}

module.exports = insertionSort;
