"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findMinArrowShots(points) {
    const pointsSorted = points.sort((pA, pB) => pA[0] - pB[0] || pA[1] - pB[1]);
    let result = 1;
    let lastPoint = pointsSorted[0];
    let currentBreak = lastPoint[1];
    for (let index = 1; index < pointsSorted.length; index++) {
        const element = pointsSorted[index];
        if (currentBreak < element[0]) {
            result++;
            currentBreak = element[1];
        }
        else {
        }
    }
    return result;
}
// console.log(
// 	findMinArrowShots([
// 		[10, 16],
// 		[2, 8],
// 		[1, 6],
// 		[7, 12],
// 	])
// );
// console.log(
// 	findMinArrowShots([
// 		[1, 2],
// 		[3, 4],
// 		[5, 6],
// 		[7, 8],
// 	])
// );
console.log(findMinArrowShots([
    [9, 12],
    [1, 10],
    [4, 11],
    [8, 12],
    [3, 9],
    [6, 9],
    [6, 7],
]));
//# sourceMappingURL=minimum-number-of-arrows-to-burst-balloons.js.map