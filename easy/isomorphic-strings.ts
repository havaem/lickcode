function isIsomorphic(s: string, t: string): boolean {
	if (s.length !== t.length) return false;

	let result = true;
	const mark: {
		[key: string]: string;
	} = {};
	const alreadyMapped: {
		[key: string]: boolean;
	} = {};
	for (let i = 0; i < s.length; i++) {
		if (!mark[s[i]] && !alreadyMapped[t[i]]) {
			mark[s[i]] = t[i];
			alreadyMapped[t[i]] = true;
		} else if (mark[s[i]] !== t[i]) {
			return false;
		}
	}

	return result;
}

// Example 1:
console.log(isIsomorphic("egg", "add"));
// Input: s = "egg", t = "add"
// Output: true
// Example 2:

console.log(isIsomorphic("foo", "bar"));
// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

console.log(isIsomorphic("paper", "title"));
// Input: s = "paper", t = "title"
// Output: true
