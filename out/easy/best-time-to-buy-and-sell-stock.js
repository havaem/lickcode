"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function maxProfit(prices) {
    let result = 0;
    let start = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (start > prices[i])
            start = prices[i];
        else
            result = Math.max(result, prices[i] - start);
    }
    return result;
}
// Example 1:
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:
console.log(maxProfit([7, 6, 4, 3, 1]));
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
console.log(maxProfit([2, 1, 4]));
//# sourceMappingURL=best-time-to-buy-and-sell-stock.js.map