function exist(board: string[][], word: string): boolean {
	const m = board.length;
	const n = board[0].length;
	const wordLength = word.length;
	let result = false;
	const track = (i: number, j: number, l: number) => {
		if (l === wordLength) {
			result = true;
			return;
		}

		if (i >= m || j >= n || i < 0 || j < 0) return;
		if (board[i][j] !== word[l]) return;

		const pre = board[i][j];
		board[i][j] = "*";

		track(i + 1, j, l + 1);
		track(i, j + 1, l + 1);
		track(i - 1, j, l + 1);
		track(i, j - 1, l + 1);

		board[i][j] = pre;
	};
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			track(i, j, 0);
		}
	}
	return result;
}

console.log(
	exist(
		[
			["A", "B", "C", "E"],
			["S", "F", "C", "S"],
			["A", "D", "E", "E"],
		],
		"ABCCED"
	)
);
