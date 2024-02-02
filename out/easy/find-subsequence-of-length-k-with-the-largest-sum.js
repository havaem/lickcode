"use strict";
// Example 1:
Object.defineProperty(exports, "__esModule", { value: true });
// Input: nums = [2,1,3,3], k = 2
// Output: [3,3]
// Explanation:
// The subsequence has the largest sum of 3 + 3 = 6.
// Example 2:
// Input: nums = [-1,-2,3,4], k = 3
// Output: [-1,3,4]
// Explanation:
// The subsequence has the largest sum of -1 + 3 + 4 = 6.
// Example 3:
// Input: nums = [3,4,3,3], k = 2
// Output: [3,4]
// Explanation:
// The subsequence has the largest sum of 3 + 4 = 7.
// Another possible subsequence is [4, 3].
function maxSubsequence(nums, k) {
    const newNums = nums
        .map((e, i) => ({
        v: e,
        i,
    }))
        .sort((a, b) => b.v - a.v)
        .slice(0, k)
        .sort((a, b) => a.i - b.i);
    return newNums.map(({ i }) => nums[i]);
}
console.log(maxSubsequence([-1, -2, 3, 4], 3));
//# sourceMappingURL=find-subsequence-of-length-k-with-the-largest-sum.js.map