"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumBase(n, k) {
    return n
        .toString(k)
        .split("")
        .reduce((sum, num) => sum + Number(num), 0);
}
//# sourceMappingURL=sum-of-digits-in-base-k.js.map