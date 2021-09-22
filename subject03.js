/**
 *
 *
 * @param {*} nums1
 * @param {*} nums2
 */
let nums1 = [3];
let nums2 = [-2, -1];
var findMedianSortedArrays = function (nums1, nums2) {
	let result = null;
	let nums3 = nums1.concat(nums2);
	for (let i = 0; i < nums3.length - 1; i++) {
		for (let j = 0; j < nums3.length - 1 - i; j++) {
			if (nums3[j] > nums3[j + 1]) {
				let result = nums3[j + 1];
				nums3[j + 1] = nums3[j];
				nums3[j] = result;
			}
		}
	}

	if (nums3.length % 2 === 0) {
		result = (nums3[Math.floor(nums3.length / 2)] + nums3[Math.floor(nums3.length / 2) - 1]) / 2;
	} else {
		result = nums3[Math.floor(nums3.length / 2)];
	}
	return result;
};
/* var findMedianSortedArrays = function (nums1, nums2) {
	let result = null;
	let nums3 = nums1.concat(nums2).sort((x, y) => {
		return x - y;
	});
	console.log(nums3);
	if (nums3.length % 2 === 0) {
		result = (nums3[Math.floor(nums3.length / 2)] + nums3[Math.floor(nums3.length / 2) - 1]) / 2;
	} else {
		result = nums3[Math.floor(nums3.length / 2)];
	}
	return result;
}; */
