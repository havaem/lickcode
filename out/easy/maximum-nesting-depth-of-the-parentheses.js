"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function maxDepth(s) {
    let l = 0, ml = 0;
    s.split("").forEach((e) => {
        if (e === "(")
            l++;
        else if (e === ")")
            l--;
        ml = Math.max(l, ml);
    });
    return ml;
}
//# sourceMappingURL=maximum-nesting-depth-of-the-parentheses.js.map