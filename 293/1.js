let avg = 0
function func(...nums) {
	let sum = 0;
	
	for (let num of nums) {
		sum += num;
        avg += 1
	}
	
	return sum/avg;
}

let result = func(1, 2, 3);
console.log(result);