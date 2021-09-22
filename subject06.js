/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
	let parseNum = parseInt(s);
	if (!isNaN(parseNum)) {
		if (parseNum < Math.pow(-2, 31)) {
			return Math.pow(-2, 31);
		} else if (parseNum > Math.pow(2, 31) - 1) {
			return Math.pow(2, 31) - 1;
		} else {
			return parseNum;
		}
	}
	return 0;
};
console.log(myAtoi('42'));
console.log(myAtoi('   -42'));
console.log(myAtoi('4193 with words'));
console.log(myAtoi('words and 987'));
console.log(myAtoi('-91283472332'));
