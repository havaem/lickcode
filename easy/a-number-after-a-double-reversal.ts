function isSameAfterReversals(num: number): boolean {
	const numS = num.toString();

	if (numS.length !== 1 && numS.endsWith("0")) return false;
	return true;
}
