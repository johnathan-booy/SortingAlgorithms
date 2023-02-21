/**
 * Merges two sorted arrays arr1 and arr2 into a single sorted array.
 *
 * @param {Array} arr1 - The first sorted array.
 * @param {Array} arr2 - The second sorted array.
 * @returns {Array} The merged sorted array.
 *
 * @example
 *
 * // returns [1, 2, 3, 4, 5, 6]
 * merge([1, 3, 5], [2, 4, 6]);
 */
function merge(arr1, arr2) {
	let head1 = 0;
	let head2 = 0;
	const merged = [];
	while (head1 < arr1.length && head2 < arr2.length) {
		if (arr1[head1] < arr2[head2]) {
			merged.push(arr1[head1]);
			head1++;
		} else {
			merged.push(arr2[head2]);
			head2++;
		}
	}
	while (head1 < arr1.length) {
		merged.push(arr1[head1]);
		head1++;
	}
	while (head2 < arr2.length) {
		merged.push(arr2[head2]);
		head2++;
	}
	return merged;
}

function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	const mid = Math.floor(arr.length / 2);
	const left = mergeSort(arr.slice(0, mid));
	const right = mergeSort(arr.slice(mid));
	return merge(left, right);
}

module.exports = { merge, mergeSort };
