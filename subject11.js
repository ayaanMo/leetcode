/**
 * @param {string[]} strs
 * @return {string} prefix
 */
var longestCommonPrefix = function (strs) {
	// 1.假如strs长度为0直接返回空字符串
	if (strs.length === 0) {
		return '';
	}
	let prefix = strs[0];
	// let targetIndex = [];
	let targetIndex = prefix.length;
	// 2.找寻公共prefix
	for (let i = 0; i < strs.length; i++) {
		// targetIndex.push(publicPrefix(prefix, strs[i]));
		targetIndex =
			publicPrefix(prefix, strs[i]) < targetIndex ? publicPrefix(prefix, strs[i]) : targetIndex;
		if (targetIndex < 0) {
			break;
		}
	}
	// let minIndex = Math.min(...targetIndex);
	// prefix = minIndex < 0 ? '' : prefix.substr(0, minIndex + 1);
	prefix = targetIndex < 0 ? '' : prefix.substr(0, targetIndex + 1);
	return prefix;
};
var publicPrefix = function (prefix, str) {
	let minLength = Math.min(prefix.length, str.length);
	let index = -1;
	for (let i = 0; i < minLength; i++) {
		if (prefix[i] !== str[i]) {
			break;
		}
		index++;
	}
	return index;
};
console.log(longestCommonPrefix(['flower', 'flow', 'flight', 'f']));
// console.log(publicPrefix('flower', 'flight'));

/**
 * @param {string[]} strs
 * @return {string}
 */
/* var longestCommonPrefix = function (strs) {
	let prefix = '';
	// 1.假如strs长度为0直接返回空字符串
	if (strs.length === 0) {
		return prefix;
	}
	prefix = strs[0];
	// 2.找寻公共prefix
	for (let i = 0; i < strs.length; i++) {
		prefix = publicPrefix(prefix, strs[i]);
	}
	return prefix;
};

var publicPrefix = function (prefix, str) {
	let minLength = Math.min(prefix.length, str.length);
	let pre = '';
	let index = 0;
	while (index < minLength && prefix[index] === str[index]) {
		index++;
	}
	pre = str.substr(0, index);
	return pre;
}; */
