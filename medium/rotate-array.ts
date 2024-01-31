/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
	/* Way 1 - Time limit exceeded */
	// let round = 0;
	// let nK = k % nums.length;
	// while (round < nK) {
	// 	const lastValue = nums[nums.length - 1];
	// 	for (let i = nums.length - 1; i >= 1; i--) {
	// 		nums[i] = nums[i - 1];
	// 	}
	// 	nums[0] = lastValue;
	// 	round++;
	// }
	/* Way 2 */
	// let round = 0;
	// let nK = k % nums.length;
	// while (round < nK) {
	// 	let lastNum = nums.pop();
	// 	if (lastNum !== undefined) nums.unshift(lastNum);
	// 	round++;
	// }
	/* Way 3 */
	let nK = k % nums.length;
	let newEle = nums.reduce((acc, cur, i) => {
		if (i >= nums.length - nK) {
			acc.push(cur);
		}
		return acc;
	}, [] as Array<number>);
	nums = nums.slice(0, nums.length - nK);
	nums.unshift(...newEle);
	console.log(nums);
}

// Example 1:
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
