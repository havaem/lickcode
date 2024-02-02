function maxProfit(prices: number[]): number {
	let profit = 0;
	let start = Infinity;
	for (let i = 0; i < prices.length; i++) {
		const element = prices[i];
		if (start > element && i < prices.length - 1) {
			start = element;
		} else if (start < element && (element > prices[i + 1] || i === prices.length - 1)) {
			profit += element - start;
			start = Infinity;
		}
	}
	return profit;
}

// Example 1:
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.
// Example 2:
console.log(maxProfit([1, 2, 3, 4, 5]));
// Input: prices = [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// Total profit is 4.
// Example 3:
console.log(maxProfit([7, 6, 4, 3, 1]));
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.
