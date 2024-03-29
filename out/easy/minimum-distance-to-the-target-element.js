"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getMinDistance(nums, target, start) {
    let max = Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target)
            max = Math.min(max, Math.abs(i - start));
    }
    return max;
}
// Example 1:
// Input: nums = [1,2,3,4,5], target = 5, start = 3
// Output: 1
// Explanation: nums[4] = 5 is the only value equal to target, so the answer is abs(4 - 3) = 1.
console.log(getMinDistance([1, 2, 3, 4, 5], 5, 3));
// Example 2:
// Input: nums = [1], target = 1, start = 0
// Output: 0
// Explanation: nums[0] = 1 is the only value equal to target, so the answer is abs(0 - 0) = 0.
console.log(getMinDistance([1], 1, 0));
// Example 3:
// Input: nums = [1,1,1,1,1,1,1,1,1,1], target = 1, start = 0
// Output: 0
// Explanation: Every value of nums is 1, but nums[0] minimizes abs(i - start), which is abs(0 - 0) = 0.
console.log(getMinDistance([1, 1, 1, 1, 1, 1, 1], 1, 0));
//# sourceMappingURL=minimum-distance-to-the-target-element.js.map