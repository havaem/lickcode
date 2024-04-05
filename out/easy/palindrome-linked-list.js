"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
function isPalindrome(head) {
    let string1 = "";
    let string2 = "";
    let currentNode = head;
    while (currentNode !== null) {
        string1 = `${string1}${currentNode.val}`;
        string2 = `${currentNode.val}${string2}`;
        currentNode = currentNode.next;
    }
    return string1 === string2;
}
//# sourceMappingURL=palindrome-linked-list.js.map