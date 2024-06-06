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

function addOneRow(root: TreeNode | null, val: number, depth: number): TreeNode | null {
	if (root) {
		switch (depth) {
			case 1:
				return new TreeNode(val, root, null);
			case 2:
				dq(root, val, 1, depth);
				break;
			default:
				if (root.left) dq(root.left, val, 2, depth);
				if (root.right) dq(root.right, val, 2, depth);
				break;
		}
	}
	return root;
}
function dq(root: TreeNode, val: number, curDepth: number, depth: number) {
	if (curDepth + 1 === depth) {
		const leftNode = root.left;
		const rightNode = root.right;
		root.left = new TreeNode(val, leftNode ?? null, null);
		root.right = new TreeNode(val, null, rightNode ?? null);
	} else {
		root.left && dq(root.left, val, curDepth + 1, depth);
		root.right && dq(root.right, val, curDepth + 1, depth);
	}
}

// const test = new TreeNode(
// 	4,
// 	new TreeNode(2, new TreeNode(3), new TreeNode(1)),
// 	new TreeNode(6, new TreeNode(5))
// );
// addOneRow(test, 1, 2);
const test = new TreeNode(4, new TreeNode(2, new TreeNode(3), new TreeNode(1)));

addOneRow(test, 1, 3);
