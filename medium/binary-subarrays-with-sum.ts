function numSubarraysWithSum(nums: number[], goal: number): number {
	let result = 0;

	let sum = 0;

	for (let i = 0; i < nums.length; i++) {
		sum = nums[i];
		if (sum === goal) {
			result++;
		}
		for (let j = i + 1; j < nums.length; j++) {
			sum += nums[j];
			if (sum > goal) {
				sum = 0;
				break;
			}
			if (sum === goal) {
				result++;
			}
		}
	}

	return result;
}

console.log(numSubarraysWithSum([1, 0, 0, 0], 0));
// Example 1:
// console.log(numSubarraysWithSum([1, 1, 0, 0, 1], 2));
// Input: nums = [1,0,1,0,1], goal = 2
// Output: 4
// Explanation: The 4 subarrays are bolded and underlined below:
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// Example 2:

// console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0));
// Input: nums = [0,0,0,0,0], goal = 0
// Output: 15
