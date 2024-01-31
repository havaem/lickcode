function majorityElement(nums: number[]): number {
	let candidate: number = 0;
	let count = 0;

	for (const num of nums.sort()) {
		if (count >= Math.ceil(nums.length / 2)) {
			break;
		}
		if (count === 0) {
			candidate = num;
		}

		count += num === candidate ? 1 : -1;
	}

	return candidate;
}

// Example 1:
// console.log(majorityElement([3, 2, 3]));
// Input: nums = [3,2,3]
// Output: 3
// Example 2:

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
