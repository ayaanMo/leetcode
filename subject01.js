// 两数之和
const nums = [1, 3, 5, 6, 7, 8, 9, 3];
const target = 10;
let towSum = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j];
			}
		}
	}
};
let result = towSum(nums, target);
console.log(result);
