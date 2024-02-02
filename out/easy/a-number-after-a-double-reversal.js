"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isSameAfterReversals(num) {
    const numS = num.toString();
    if (numS.length !== 1 && numS.endsWith("0"))
        return false;
    return true;
}
//# sourceMappingURL=a-number-after-a-double-reversal.js.map