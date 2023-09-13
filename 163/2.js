let arr = 4
let flag = false

if (arr % arr == 0 && arr % 1 == 0 && arr % 2 != 0 && arr % 3 != 0) {
	flag = true
}
if (flag === true) {
	console.log('+++')
}
else {
	console.log('---')
}