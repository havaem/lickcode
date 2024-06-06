class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function doubleIt(head: ListNode | null): ListNode | null {
	let curr = head;
	let prev: ListNode | null = null;
	if (!curr) return head;

	while (curr) {
		curr.val *= 2;
		if (curr.val > 9) {
			curr.val -= 10;
			if (prev) {
				prev.val += 1;
			} else {
				head = new ListNode(1, head);
			}
		}
		prev = curr;
		curr = curr.next;
	}
	return head;
}
