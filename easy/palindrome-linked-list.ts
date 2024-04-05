class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}
function isPalindrome(head: ListNode | null): boolean {
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
