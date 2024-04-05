"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
let a = new ListNode(1, new ListNode(2, new ListNode(3)));
function reverseList(head) {
    let current = head;
    let pre = undefined;
    let next = current;
    while (next) {
        current = next;
        next = current.next;
        if (!pre) {
            current.next = null;
        }
        else {
            current.next = pre;
        }
        pre = current;
    }
    return current;
}
console.log(reverseList(a));
//# sourceMappingURL=reverse-linked-list.js.map