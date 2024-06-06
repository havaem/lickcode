class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}
function sumNumbers(root: TreeNode | null): number {
	if (root) return dq(root, 0);
	return 0;
}

function dq(root: TreeNode | null, curr: number): number {
	if (root === null) return 0;
	let result = root.val + curr * 10;
	if (root.left === null && root.right === null) return result;
	return dq(root.left, result) + dq(root.right, result);
}

const test = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(sumNumbers(test));
