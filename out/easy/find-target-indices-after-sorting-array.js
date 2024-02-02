"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function targetIndices(nums, target) {
    // check nums has target first
    if (!nums.includes(target))
        return [];
    const results = [];
    nums.sort((a, b) => a - b).forEach((e, i) => {
        if (e === target)
            results.push(i);
    });
    return results;
}
// Example 1:
// Input: nums = [1,2,5,2,3], target = 2
// Output: [1,2]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The indices where nums[i] == 2 are 1 and 2.
// Example 2:
// Input: nums = [1,2,5,2,3], target = 3
// Output: [3]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The index where nums[i] == 3 is 3.
// Example 3:
// Input: nums = [1,2,5,2,3], target = 5
// Output: [4]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The index where nums[i] == 5 is 4.
//# sourceMappingURL=find-target-indices-after-sorting-array.js.map