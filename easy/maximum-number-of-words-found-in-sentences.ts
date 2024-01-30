function mostWordsFound(sentences: string[]): number {
	let max = 0;
	for (let i = 0; i < sentences.length; i++) {
		const length = sentences[i].split(" ").length;
		max = Math.max(max, length);
	}
	return max;
}
