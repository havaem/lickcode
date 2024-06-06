function kthSmallestPrimeFraction(arr: number[], k: number): number[] {
	const results: {
		nums: number[];
		value: number;
	}[] = [];

	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			results.push({
				value: arr[i] / arr[j],
				nums: [arr[i], arr[j]],
			});
		}
	}

	return results.sort((a, b) => a.value - b.value)[k - 1].nums;
}

// Example 1:
console.log(kthSmallestPrimeFraction([1, 2, 3, 5], 3));
// Input: arr = [1,2,3,5], k = 3
// Output: [2,5]
// Explanation: The fractions to be considered in sorted order are:
// 1/5, 1/3, 2/5, 1/2, 3/5, and 2/3.
// The third fraction is 2/5.
// Example 2:

console.log(kthSmallestPrimeFraction([1, 7], 1));
// Input: arr = [1,7], k = 1
// Output: [1,7]
