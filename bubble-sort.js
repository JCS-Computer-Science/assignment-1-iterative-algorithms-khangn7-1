function bubbleSort(array) {
	/*
    ** Compare the first two elements and swap if necessary.
    ** Then compare the second and third elements and swap if
    ** necessary. Continue until you've checked and swapped (if needed)
    ** the last and second last elements.
    
    ** Repeat the above process until you get through an entire
    ** cycle without needing any swaps
    */

    let unchanged = true;

    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < (n - i - 1); j ++) {
            if (array[j] > array[j + 1]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
                unchanged = false;
            }
        }
        if (unchanged) {
            return array;
        }
        unchanged = true;
    }

	return array;
}

module.exports = bubbleSort;
