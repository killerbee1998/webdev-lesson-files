const x = {
	a: 1,
	b: 2,
	c: 3,
	d: 4
}

const {q, ..t} = x;

console.log(q);
console.log(t);