class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

type NodeType = ListNode | null;

function lengthOfNode(listNode: ListNode) {
	let result = 0;
	let nextNode: NodeType = listNode;
	while (nextNode) {
		result++;
		nextNode = nextNode.next;
	}
	return result;
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
	let currentNode: NodeType = head;
	if (!currentNode) return head;
	const nodeLength = lengthOfNode(currentNode);

	if (nodeLength < k || k === 1) return head;

	let i = 1;
	let nReverse = Math.floor(nodeLength / k);
	let nextNode: NodeType = currentNode;
	let preNode: NodeType = currentNode;
	let newTail: NodeType = currentNode;

	let newHeadOfList: NodeType = currentNode;
	let lastNewTail: NodeType | undefined = undefined;
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
		} else if (i <= k) {
			currentNode.next = preNode;
			if (i === k) {
				nReverse--;
				if (lastNewTail) {
					lastNewTail.next = currentNode;
					lastNewTail = newTail;
				} else {
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
