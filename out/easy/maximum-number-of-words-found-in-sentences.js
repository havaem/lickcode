"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mostWordsFound(sentences) {
    let max = 0;
    for (let i = 0; i < sentences.length; i++) {
        const length = sentences[i].split(" ").length;
        max = Math.max(max, length);
    }
    return max;
}
//# sourceMappingURL=maximum-number-of-words-found-in-sentences.js.map