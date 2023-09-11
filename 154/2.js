let arr = [1, 2, -4, 3, 0, 4, 5,-2];
let sum
for (let elem of arr) {
	if (elem < 0) {
		console.log('Отрицательные числа');
		break;
  }
  sum += elem
  console.log(elem)
}
  console.log(sum)