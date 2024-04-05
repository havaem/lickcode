class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

let a = new ListNode(1, new ListNode(2, new ListNode(3)));

function reverseList(head: ListNode | null): ListNode | null {
	type Node = ListNode | null;

	let current: Node = head;
	let pre: Node | undefined = undefined;
	let next: Node = current;

	while (next) {
		current = next;
		next = current.next;
		if (!pre) {
			current.next = null;
		} else {
			current.next = pre;
		}
		pre = current;
	}
	return current;
}

console.log(reverseList(a));
