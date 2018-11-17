console.log("variables");

let string = 'ola mundo';

console.log(string);

const sempre = 'Vivo!';

console.log(sempre);

var antiga = 'Antiga';

console.log(antiga);

function test() {
	console.log(sempre);
	console.log(string);
	let dentro = 'xyz';
	var antigaDentro = 'xas';
}

test();

console.log(antigaDentro);
console.log(dentro);