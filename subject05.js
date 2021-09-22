/**
 * @param {number} x
 * @return {number}
 * -231 <= x <= 231 - 1
 */
var reverse = function (x) {
	let strNum = String(x);
	let isNegative = false;
	let substrNum = strNum;
	if (strNum.substring(0, 1) === '-') {
		isNegative = true;
		substrNum = strNum.substring(1);
	}
	let reverseStr = '';
	for (let i = substrNum.length - 1; i > -1; i--) {
		reverseStr += substrNum[i];
	}
	let reverseNum = isNegative ? parseInt(`-${reverseStr}`) : parseInt(reverseStr);
	if (reverseNum < Math.pow(-2, 31) || reverseNum > Math.pow(2, 31) - 1) {
		return 0;
	}
	return reverseNum;
};
console.log(reverse(1534236469));
