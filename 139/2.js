let str = 1234
let last = String(str)

if (last[last.length - 1] == 0 || last[last.length - 1] == 2 || last[last.length - 1] == 4 || last[last.length - 1] == 6 || last[last.length - 1] == 8) {
	console.log('Четное');
}
else {
	console.log ('Нечетное')
}