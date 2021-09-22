/**
 * @param {number[]} height
 * @return {number}
 */
{
	const maxArea = function (height) {
		let maxArea = 0;
		for (let i = 0; i < height.length; i++) {
			for (let j = i + 1; j <= height.length - 1; j++) {
				let minHeight = Math.min(height[i], height[j]);
				console.log(height[i], '-----', height[j]);
				console.log(j - i);
				let width = j - i;
				console.log(minHeight * width, '值');
				if (minHeight * width > maxArea) {
					maxArea = minHeight * width;
				}
			}
		}
		return maxArea;
	};
	console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
}
{
	// 双指针移动
	const maxArea = function (height) {
		let maxArea = 0;
		let heigthIndex = 0;
		let widthIndex = height.length - 1;
		while (heigthIndex < widthIndex) {
			let area = Math.min(height[heigthIndex], height[widthIndex]) * (widthIndex - heigthIndex);
			maxArea = Math.max(area, maxArea);
			if (height[heigthIndex] <= height[widthIndex]) {
				++heigthIndex;
			} else {
				--widthIndex;
			}
		}
		return maxArea;
	};
	console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7, 10, 20, 15]));
}
