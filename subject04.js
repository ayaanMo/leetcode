// 给你一个字符串 s，找到 s 中最长的回文子串。
// 执行结果是对的 但是超时了
/**
 * @param {string} s
 * @return {string}
 */
{
	const longestPalindrome = function (s) {
		let max_s = s.length === 1 ? s : '';
		if (!max_s) {
			for (let i = 0; i < s.length; i++) {
				let find_s = s[i];
				for (let j = i + 1; j < s.length; j++) {
					if (s[i] === s[j]) {
						find_s = s.slice(i, j + 1);
					}
					if (max_s.length < find_s.length) {
						if (find_s.split('').reverse().join('') === find_s) {
							max_s = find_s;
						}
					}
				}
			}
		}
		return max_s;
	};
	console.time('longestPalindrome');
	console.log(
		longestPalindrome(
			'anugnxshgonmqydttcvmtsoaprxnhpmpovdolbidqiyqubirkvhwppcdyeouvgedccipsvnobrccbndzjdbgxkzdbcjsjjovnhpnbkurxqfupiprpbiwqdnwaqvjbqoaqzkqgdxkfczdkznqxvupdmnyiidqpnbvgjraszbvvztpapxmomnghfaywkzlrupvjpcvascgvstqmvuveiiixjmdofdwyvhgkydrnfuojhzulhobyhtsxmcovwmamjwljioevhafdlpjpmqstguqhrhvsdvinphejfbdvrvabthpyyphyqharjvzriosrdnwmaxtgriivdqlmugtagvsoylqfwhjpmjxcysfujdvcqovxabjdbvyvembfpahvyoybdhweikcgnzrdqlzusgoobysfmlzifwjzlazuepimhbgkrfimmemhayxeqxynewcnynmgyjcwrpqnayvxoebgyjusppfpsfeonfwnbsdonucaipoafavmlrrlplnnbsaghbawooabsjndqnvruuwvllpvvhuepmqtprgktnwxmflmmbifbbsfthbeafseqrgwnwjxkkcqgbucwusjdipxuekanzwimuizqynaxrvicyzjhulqjshtsqswehnozehmbsdmacciflcgsrlyhjukpvosptmsjfteoimtewkrivdllqiotvtrubgkfcacvgqzxjmhmmqlikrtfrurltgtcreafcgisjpvasiwmhcofqkcteudgjoqqmtucnwcocsoiqtfuoazxdayricnmwcg',
		),
	);
	console.timeEnd('longestPalindrome');
	// console.log(longestPalindrome('babad'));
	// console.log(longestPalindrome('cbba'));
	// console.log(longestPalindrome('a'));
	// console.log(longestPalindrome('ac'));
	// console.log(longestPalindrome('ccccccc'));
}
{
	/**
	 * @param {string} s
	 * @return {string}
	 */
	var longestPalindrome = function (s) {
		if (s.length < 2) {
			return s;
		}
		let startIndex = 0;
		let endIndex = 1;
		for (let i = 0; i < s.length - 1; i++) {
			for (let j = i + 1; j < s.length; j++) {
				if (endIndex - startIndex < j - i + 1 && validIsPalindrome(s, i, j)) {
					startIndex = i;
					endIndex = j + 1;
				}
			}
		}
		let longestPalindromeStr = s.slice(startIndex, endIndex);
		return longestPalindromeStr;
	};
	var validIsPalindrome = function (strArr, i, j) {
		while (i < j) {
			if (strArr[i] !== strArr[j]) {
				return false;
			}
			++i;
			--j;
		}
		return true;
	};
	console.time('longestPalindrome1');
	// console.log(longestPalindrome('cbbd'));
	console.log(
		longestPalindrome(
			'anugnxshgonmqydttcvmtsoaprxnhpmpovdolbidqiyqubirkvhwppcdyeouvgedccipsvnobrccbndzjdbgxkzdbcjsjjovnhpnbkurxqfupiprpbiwqdnwaqvjbqoaqzkqgdxkfczdkznqxvupdmnyiidqpnbvgjraszbvvztpapxmomnghfaywkzlrupvjpcvascgvstqmvuveiiixjmdofdwyvhgkydrnfuojhzulhobyhtsxmcovwmamjwljioevhafdlpjpmqstguqhrhvsdvinphejfbdvrvabthpyyphyqharjvzriosrdnwmaxtgriivdqlmugtagvsoylqfwhjpmjxcysfujdvcqovxabjdbvyvembfpahvyoybdhweikcgnzrdqlzusgoobysfmlzifwjzlazuepimhbgkrfimmemhayxeqxynewcnynmgyjcwrpqnayvxoebgyjusppfpsfeonfwnbsdonucaipoafavmlrrlplnnbsaghbawooabsjndqnvruuwvllpvvhuepmqtprgktnwxmflmmbifbbsfthbeafseqrgwnwjxkkcqgbucwusjdipxuekanzwimuizqynaxrvicyzjhulqjshtsqswehnozehmbsdmacciflcgsrlyhjukpvosptmsjfteoimtewkrivdllqiotvtrubgkfcacvgqzxjmhmmqlikrtfrurltgtcreafcgisjpvasiwmhcofqkcteudgjoqqmtucnwcocsoiqtfuoazxdayricnmwcg',
		),
	);
	console.timeEnd('longestPalindrome1');
}
