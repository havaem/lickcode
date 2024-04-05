"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findDuplicates(nums) {
    const count = {};
    const result = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (count[nums[i]] === 1) {
            result.add(+nums[i]);
        }
        else
            count[nums[i]] = 1;
    }
    return [...result];
}
// function findDuplicates(nums: number[]): number[] {
// 	const result = [];
// 	for (let i = 0; i < nums.length; i++) {
// 		let d = Math.abs(nums[i]) - 1;
// 		if (nums[d] < 0) {
// 			result.push(Math.abs(nums[i]));
// 		} else {
// 			nums[d] *= -1;
// 		}
// 	}
// 	return result;
// }
console.log(findDuplicates([4, 3, 2, 7, 10, 10, 2, 3, 1]));
//# sourceMappingURL=find-all-duplicates-in-an-array.js.map