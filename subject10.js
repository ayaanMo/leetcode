/**
 * @param {string} s
 * @return {number}
 * * 1 <= num <= 3999
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
var romanToInt = function (s) {
	let sArr = Array.from(s);
	let map = new Map([
		['I', 1],
		['IV', 4],
		['V', 5],
		['IX', 9],
		['X', 10],
		['XL', 40],
		['L', 50],
		['XC', 90],
		['C', 100],
		['CD', 400],
		['D', 500],
		['CM', 900],
		['M', 1000],
	]);

	let num = sArr.reduce(
		(pre, cur) => {
			let total = 0;
			if (pre.pre && map.get(pre.pre + cur)) {
				let preNum = pre.total - map.get(pre.pre);
				let curNum = map.get(pre.pre + cur);
				total = preNum + curNum;
			} else {
				let curNum = map.get(cur);
				total = curNum + pre.total;
			}
			return { total: total, pre: cur };
		},
		{ total: 0, pre: '' },
	);
	return num.total;
};
console.log(romanToInt('III'));
