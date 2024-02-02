"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isPalindromic(value) {
    let leftStr = "";
    let rightStr = "";
    let divide = value.length / 2;
    for (let i = 0; i < divide; i++) {
        leftStr += value[i];
        rightStr += value[value.length - 1 - i];
    }
    return leftStr === rightStr;
}
function firstPalindrome(words) {
    for (let i = 0; i < words.length; i++) {
        if (isPalindromic(words[i]))
            return words[i];
    }
    return "";
}
console.log(isPalindromic("ujvoejixvaioikkwzxgtmkchckrigfejjpheiiehpjjefgirkchckmtgxzwkkioiavxijeovju"));
//# sourceMappingURL=find-first-palindromic-string-in-the-array.js.map