function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let switched = false;
		for (let j = 0; j < arr.length - i; j++) {
			if (arr[j] > arr[j + 1]) {
				const temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				switched = true;
			}
		}
		if (!switched) break;
	}
	return arr;
}

module.exports = bubbleSort;
