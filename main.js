const Arrow = require('./Arrow.js');

let result;

result = test();
console.log(result);

// result = randWithoutBase(10);
// console.log(result);

// result = randWithBase(100, 6);
// console.log(result.length);

function randWithoutBase(num) {
	const arr = new Arrow();
	const res = [];

	for (let i = 0; i < num; i++) {
		res.push(arr.random());
	}

	return res;
}

function randWithBase(num, m) {
	const arr = new Arrow(m);
	const res = [];

	for (let i = 0; i < num; i++) {
		res.push(arr.random());
	}

	return res;
}

function test() {
	const m = 5;
	const iter = 10000;
	const arr = new Arrow(m);
	const res = new Map();

	for (let i = 0; i < iter; i++) {
		const r = arr.random();

		res.set(r, (res.get(r) || 0) + 1);
	}	

	const threshold = iter / m * 2;

	for (let [x, num] of res) {
		if (num >= threshold) {
			return `fail: x: ${x}, m: ${m}, num: ${num}, threshold: ${threshold}`;
		}
	}

	return 'success';
}

