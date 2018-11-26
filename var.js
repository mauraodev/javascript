bla = 2
var bla

console.log(bla)

var a, b = a = "A"

console.log(b)

for (var start = 1; start <= 10; start++) {
	console.log(start)
}

console.log('Depois do for', start)

var x = 1
if (x === 1) {
	var y = 2
}

console.log('valor de x', x)
console.log('valor de y', y)

function test() {
	var hue = 'cana'
}

test()
console.log(hue)