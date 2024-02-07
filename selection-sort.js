function selectionSort(array) {
	/*
	 ** Search through the whole array for the smallest element
	 ** then swap it with the first element.
	 ** Next, search through the whole array (except the first element)
	 ** for the smallest, then swap it with the second element.
	 ** Continue like this until you have only one element left.
	 */
	/**
	 * let start = 0
	 * go from start to n
	 * 	find lowest
	 * array[start] = lowest
	 * start++
	 * dont need to check start = n
	 */
	let n = array.length;
	for (let i = 0; i < n; i++) {
		let lowest_i = i;

		for (let j = i + 1; j < n; j++) {
			if (array[j] < array[lowest_i]) {
				lowest_i = j;
			}
		}
		
		let tmp = array[i]
		array[i] = array[lowest_i];
		array[lowest_i] = tmp;
	}

	return array;
}

module.exports = selectionSort;
