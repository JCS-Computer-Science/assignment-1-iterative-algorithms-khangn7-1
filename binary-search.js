function binarySearch(array, searchTerm) {
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */
	let n = array.length,
		start = 0,
		end = n;
		mid = Math.floor(n/2);

	let guess = array[mid];

	while (true) 
	{

		if (guess === searchTerm) {
			return mid;
		} else if (searchTerm < guess) {
			end = mid;
		} else {
			start = mid + 1;
		}

		mid = Math.floor((start + end)/2);
		guess = array[mid];
	}
}

module.exports = binarySearch;
