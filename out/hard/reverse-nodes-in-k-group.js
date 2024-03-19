"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
function lengthOfNode(listNode) {
    let result = 0;
    let nextNode = listNode;
    while (nextNode) {
        result++;
        nextNode = nextNode.next;
    }
    return result;
}
function reverseKGroup(head, k) {
    let currentNode = head;
    if (!currentNode)
        return head;
    const nodeLength = lengthOfNode(currentNode);
    if (nodeLength < k || k === 1)
        return head;
    let i = 1;
    let nReverse = Math.floor(nodeLength / k);
    let nextNode = currentNode;
    let preNode = currentNode;
    let newTail = currentNode;
    let newHeadOfList = currentNode;
    let lastNewTail = undefined;
    let isFirst = true;
    while (nextNode) {
        currentNode = nextNode;
        nextNode = currentNode.next;
        if (i === 1) {
            if (nReverse === 0 && lastNewTail) {
                lastNewTail.next = currentNode;
                break;
            }
            newTail = currentNode;
            newTail.next = null;
        }
        else if (i <= k) {
            currentNode.next = preNode;
            if (i === k) {
                nReverse--;
                if (lastNewTail) {
                    lastNewTail.next = currentNode;
                    lastNewTail = newTail;
                }
                else {
                    lastNewTail = newTail;
                }
                if (isFirst) {
                    newHeadOfList = currentNode;
                    isFirst = false;
                }
            }
        }
        preNode = currentNode;
        i = i === k ? 1 : i + 1;
    }
    return newHeadOfList;
}
//# sourceMappingURL=reverse-nodes-in-k-group.js.map