function isNStraightHand(hand: number[], groupSize: number): boolean {
	const result = true;
	hand = hand.sort((a, b) => a - b);

	if (hand.length % groupSize !== 0) return false;

	let maxGroup = Math.round(hand.length / groupSize);
	while (maxGroup !== 0) {
		let stepIndex = [0];
		for (let i = 1; i < hand.length && stepIndex.length < groupSize; i++) {
			if (hand[i] - hand[stepIndex[stepIndex.length - 1]] === 1) {
				stepIndex.push(i);
			}
		}
		if (stepIndex.length !== groupSize) return false;
		else {
			stepIndex.reverse().forEach((value) => {
				hand.splice(value, 1);
			});
			maxGroup--;
		}
	}

	return result;
}

// Input: hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
console.log(isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3));
// Output: true
// Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8]
// Example 2:

console.log(isNStraightHand([1, 2, 3, 4, 5], 4));
// Input: hand = [1,2,3,4,5], groupSize = 4
// Output: false
// Explanation: Alice's hand can not be rearranged into groups of 4.
