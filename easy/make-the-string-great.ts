function makeGood(s: string): string {
	const result: string[] = [];

	for (let char of s) {
		const stackEl = result.length && result[result.length - 1];

		if (stackEl && char.toUpperCase() === stackEl.toUpperCase() && char !== stackEl) {
			result.pop();
		} else {
			result.push(char);
		}
	}

	return result.join("");
}

// Example 1:
console.log(makeGood("leEeetcode"));
// Input: s = "leEeetcode"
// Output: "leetcode"
// Explanation: In the first step, either you choose i = 1 or i = 2, both will result "leEeetcode" to be reduced to "leetcode".
// Example 2:

console.log(makeGood("abBAcC"));
// Input: s = "abBAcC"
// Output: ""
// Explanation: We have many possible scenarios, and all lead to the same answer. For example:
// "abBAcC" --> "aAcC" --> "cC" --> ""
// "abBAcC" --> "abBA" --> "aA" --> ""
// Example 3:

console.log(makeGood("s"));
// Input: s = "s"
// Output: "s"
