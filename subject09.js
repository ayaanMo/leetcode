/**
 * @param {number} num
 * @return {string}
 * 1 <= num <= 3999
 * 字符          数值
    I             1
    IV            4
    V             5
    IX            9
    X             10
    XL            40
    L             50
    XC            90
    C             100
    CD            400
    D             500
    CM            900
    M             1000
 */
{
	const intToRoman = function (num) {
		let roman = '';
		let rules = [['M'], ['CM', 'D', 'CD', 'C'], ['XC', 'L', 'XL', 'X'], ['IX', 'V', 'IV', 'I']];
		if (num >= 1 && num <= 3999) {
			let arrNum = Array.from(num.toString());
			rules.splice(0, rules.length - arrNum.length);
			let i = 0;
			while (i < arrNum.length) {
				let parseNum = parseInt(arrNum[i]);
				if (parseNum > 0) {
					roman += trans(parseNum, rules[i]);
				}
				++i;
			}
		}
		return roman;
	};
	const trans = function (num, rules) {
		let roma = '';
		if (1 <= num && num < 4) {
			for (let i = 0; i < num; i++) {
				roma += rules[rules.length - 1];
			}
		} else if (num === 4) {
			roma = rules[rules.length - 2];
		} else if (5 <= num && num < 9) {
			roma = rules[rules.length - 3];
			if (num % 5 != 0) {
				for (let i = 0; i < num % 5; i++) {
					roma += rules[rules.length - 1];
				}
			}
		} else if (num === 9) {
			roma = rules[rules.length - 4];
		}
		return roma;
	};
	console.time('intToRoman');
	console.log(intToRoman(3));
	console.timeEnd('intToRoman');
}
