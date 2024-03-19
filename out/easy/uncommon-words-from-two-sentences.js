"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function uncommonFromSentences(s1, s2) {
    return `${s1} ${s2}`
        .split(" ")
        .filter((item, index, self) => self.indexOf(item) === index && self.lastIndexOf(item) === index);
}
// Example 1:
console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"));
// Input: s1 = "this apple is sweet", s2 = "this apple is sour"
// Output: ["sweet","sour"]
// Example 2:
console.log(uncommonFromSentences("apple apple", "banana"));
// Input: s1 = "apple apple", s2 = "banana"
// Output: ["banana"]
//# sourceMappingURL=uncommon-words-from-two-sentences.js.map