function findEvenNumbers(digits: number[]): number[] {
	const results: number[] = [];

	for (let i = 0; i < digits.length; i++) {
		const e1 = digits[i].toString();
		if (e1 === "0") continue;
		for (let j = 0; j < digits.length; j++) {
			if (i === j) continue;
			const e2 = digits[j].toString();
			for (let k = 0; k < digits.length; k++) {
				if (i === k || j === k || digits[k] % 2 !== 0) continue;
				const e3 = digits[k].toString();
				const num = +(e1 + e2 + e3);
				results.push(num);
			}
		}
	}

	return [...new Set(results.sort((a, b) => a - b))];
}

console.log(findEvenNumbers([1, 3, 5, 7]));
console.log(findEvenNumbers([2, 1, 3, 0]));
