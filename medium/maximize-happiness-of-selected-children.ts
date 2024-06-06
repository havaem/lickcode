function maximumHappinessSum(happiness: number[], k: number): number {
	let result = 0;
	happiness = happiness.sort((a, b) => a - b);
	let currStep = 0;

	while (currStep < k) {
		result += Math.max((happiness.pop() ?? 0) - currStep, 0);
		currStep++;
	}

	return result;
}

maximumHappinessSum([1, 2, 3], 2);
maximumHappinessSum([1, 1, 1, 1], 2);
maximumHappinessSum([2, 3, 4, 5], 1);
maximumHappinessSum([34, 29, 5], 1);
maximumHappinessSum([34, 29, 5, 2, 5, 7, 1], 3);
