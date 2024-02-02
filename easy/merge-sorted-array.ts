/**
 Do not return anything, modify nums1 in-place instead.
 */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
	let l = m + n - 1;
	let _m = m - 1;
	let _n = n - 1;

	for (let i = l; i >= 0; i--) {
		if (_m < 0 || nums1[_m] < nums2[_n]) {
			nums1[i] = nums2[_n--];
		} else nums1[i] = nums1[_m--];
	}
}

// Example 1:
// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:
// merge([1], 1, [], 0);
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
