module.exports = function (m = 4) {
	// init constants and seed
	let n = 5;
	const d = [null, 4, 3, 1, 2];
	const r = 5;
	const s = 0;
	m = 2 ** m; // m is based of the power of 2!!

	const {x, y} = initSeed(m, r, s);
	const w = [];

	function next() {
		n++;

		x[n] = ((x[n - r] ^ (y[n - s] << d[1])) + (x[n - s] ^ (y[n - r] >> d[3]))) % m;
		y[n] = ((y[n - r] ^ (x[n - s] << d[2])) + (y[n - s] ^ (x[n - r] >> d[3]))) % m;

		w[n] = x[n] ^ y[n];
	}

	this.random = () => {
		next();
		//console.log(x[n], y[n], w[n]);
		return w[n];
	}
};

function initSeed(m, r, s) {
	const x = [];
	const y = [];

	for(let i = 0; i < (r - s + 1); i++) {
		// use a TRNG as seed
		x.push(Math.floor(Math.random() * m));
		y.push(Math.floor(Math.random() * m));
	}

	return {
		x: x,
		y: y,
	}
}
