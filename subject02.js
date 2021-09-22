// 字符串不含有重复字符的最长字符串
let s = "abcabcbb";
/* var lengthOfLongestSubstring = function (s) {
	let maxStr = "";
	let i = 0;
	while (i < s.length) {
		let newstr = s.slice(i);
		let curStr = findMax(newstr);
		if (maxStr.length < curStr.length) {
			maxStr = curStr;
		}
		i++;
	}
	function findMax(newstr) {
		let curStr = "";
		for (let i in newstr) {
			if (!curStr.includes(newstr[i])) {
				curStr += newstr[i];
			} else {
				return curStr;
			}
		}
		return curStr;
	}
	return maxStr.length;
};

console.log(lengthOfLongestSubstring(s)); */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	// 滑动窗口初始化为一个空数组
	let arr = [];
	// 要返回的字符串的长度
	let max = 0;
	for (let i = 0; i < s.length; i++) {
		// 使用 indexOf 判断是否在数组中出现过
		let index = arr.indexOf(s[i]);
		// 如果出现过
		if (index !== -1) {
			// 从数组开头到当前字符串全部截取掉
			arr.splice(0, index + 1);
		}
		// 在窗口右边放进新的字符
		arr.push(s.charAt(i));
		console.log(arr);
		// 更新下最大值
		max = Math.max(arr.length, max);
	}
	console.log(max);
	// 返回
	return max;
};
lengthOfLongestSubstring(s);
