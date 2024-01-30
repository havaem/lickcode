function checkZeroOnes(s: string): boolean {
	let max1 = 0;
	let max0 = 0;
	let step1 = 0;
	let step0 = 0;

	s.split("").forEach((e, i) => {
		if (e === "1") {
			step1 += 1;
			step0 = 0;
			max1 = Math.max(max1, step1);
		} else {
			step1 = 0;
			step0 += 1;
			max0 = Math.max(max0, step0);
		}
	});
	return max1 > max0;
}

// Example 1:
console.log(checkZeroOnes("1101"));
// Input: s = "1101"
// Output: true
// Explanation:
// The longest contiguous segment of 1s has length 2: "1101"
// The longest contiguous segment of 0s has length 1: "1101"
// The segment of 1s is longer, so return true.
// Example 2:
console.log(checkZeroOnes("111000"));
// Input: s = "111000"
// Output: false
// Explanation:
// The longest contiguous segment of 1s has length 3: "111000"
// The longest contiguous segment of 0s has length 3: "111000"
// The segment of 1s is not longer, so return false.
// Example 3:
console.log(checkZeroOnes("110100010"));
// Input: s = "110100010"
// Output: false
// Explanation:
// The longest contiguous segment of 1s has length 2: "110100010"
// The longest contiguous segment of 0s has length 3: "110100010"
// The segment of 1s is not longer, so return false.
console.log(checkZeroOnes("01111110"));
