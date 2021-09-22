/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	let flag = false;
	if (x >= Math.pow(-2, 31) && x < Math.pow(2, 31) - 1) {
		if (x >= 0) {
			let strX = String(x);
			let newStrX = '';
			for (let i = strX.length - 1; i > -1; i--) {
				newStrX += strX[i];
			}
			if (x === Number(newStrX)) {
				flag = true;
			}
			return flag;
		}
	}
	return flag;
};
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(-101));
