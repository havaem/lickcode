/**
 Do not return anything, modify nums1 in-place instead.
 */

function insert(nums: number[], value: number, index: number) {
	let flag = false;
	for (let i = nums.length; i >= 0; i--) {
		if (!flag) nums[i] = nums[i - 1];
		if (index === i) {
			nums[i] = value;
			flag = true;
		}
	}
}

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
	let i = 0;
	let length = m + n;
	let a = 0;
	let b = 0;
	while (i < length) {
		let num1 = nums1[i];
		let num2 = nums2[b];
		if (num1 >= num2 && a < m) {
			insert(nums1, num2, i);
			b++;
		} else {
			a++;
		}
		i++;
	}
	console.log(nums1);
}

// Example 1:
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:
merge([1], 1, [], 0);
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:
merge([0], 0, [1], 1);
// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
