function maxDepth(s: string): number {
	let l = 0,
		ml = 0;
	s.split("").forEach((e) => {
		if (e === "(") l++;
		else if (e === ")") l--;
		ml = Math.max(l, ml);
	});
	return ml;
}
