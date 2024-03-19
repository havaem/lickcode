"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumFrom(a, b) {
    return ((a + b) * (b - a + 1)) / 2;
}
function pivotInteger(n) {
    let start = 1;
    let end = n;
    if (start === end)
        return n;
    for (let i = n - 1; i > start; i--) {
        if (sumFrom(i, n) === sumFrom(1, i)) {
            return i;
        }
    }
    return -1;
}
// Example 1:
console.log(pivotInteger(8));
// Input: n = 8
// Output: 6
// Explanation: 6 is the pivot integer since: 1 + 2 + 3 + 4 + 5 + 6 = 6 + 7 + 8 = 21.
// Example 2:
console.log(pivotInteger(1));
// Input: n = 1
// Output: 1
// Explanation: 1 is the pivot integer since: 1 = 1.
// Example 3:
console.log(pivotInteger(4));
// Input: n = 4
// Output: -1
// Explanation: It can be proved that no such integer exist.
console.log(pivotInteger(49));
//# sourceMappingURL=find-the-pivot-integer.js.map