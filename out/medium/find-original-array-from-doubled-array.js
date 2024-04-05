"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findOriginalArray(changed) {
    const results = [];
    if (changed.length % 2 !== 0 || changed.includes(0))
        return results;
    const flag = [];
    for (let i = 0; i < changed.length; i++) {
        if (flag.length >= changed.length / 2)
            break;
        if (flag.includes(i))
            continue;
        const powNumber = changed[i] * 2;
        const dividedNumber = changed[i] / 2;
        const _1 = changed.slice(i).findIndex((e) => e === powNumber);
        if (_1 !== -1) {
            results.push(changed[i]);
            flag.push(_1);
        }
        const _2 = changed.findIndex((e) => e === dividedNumber);
        if (_2 !== -1) {
            results.push(dividedNumber);
            flag.push(i);
        }
    }
    console.log("flag ", flag);
    return results;
}
// Example 1:
console.log(findOriginalArray([1, 3, 4, 2, 6, 8]));
// Input: changed = [1,3,4,2,6,8]
// Output: [1,3,4]
// Explanation: One possible original array could be [1,3,4]:
// - Twice the value of 1 is 1 * 2 = 2.
// - Twice the value of 3 is 3 * 2 = 6.
// - Twice the value of 4 is 4 * 2 = 8.
// Other original arrays could be [4,3,1] or [3,1,4].
// Example 2:
console.log(findOriginalArray([6, 3, 0, 1]));
// Input: changed = [6,3,0,1]
// Output: []
// Explanation: changed is not a doubled array.
// Example 3:
console.log(findOriginalArray([1]));
// Input: changed = [1]
// Output: []
// Explanation: changed is not a doubled array.
//# sourceMappingURL=find-original-array-from-doubled-array.js.map