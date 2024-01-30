function sumBase(n: number, k: number): number {
	return n
		.toString(k)
		.split("")
		.reduce((sum, num) => sum + Number(num), 0);
}
