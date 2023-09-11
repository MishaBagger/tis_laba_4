let num = 89;

if (num >= 10 && num <= 99) {
	let a = String(num)
	sum = +a[0] + +a[1]
  	console.log (sum)

	if (sum <= 9) {
		console.log('Сумма цифр однозначна');
	} else {
		console.log('Сумма цифр двухзначна');
	}
} else {
	console.log('Не в диапазоне от 10 до 99');
}