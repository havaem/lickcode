"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countPoints(rings) {
    var _a;
    let count = 0;
    let rod = {};
    // split rings into array [R1,G1,B1,...]
    (_a = rings.match(/.{2}/g)) === null || _a === void 0 ? void 0 : _a.forEach((e) => {
        if (rod[e[1]]) {
            if (!rod[e[1]].includes(e[0]))
                rod[e[1]] += e[0];
        }
        else {
            rod[e[1]] = e[0];
        }
    });
    for (const p in rod) {
        if (rod[p].length === 3)
            count++;
    }
    return count;
}
console.log(countPoints("B0B6G0R6R0R6G9"));
//# sourceMappingURL=rings-and-rods.js.map