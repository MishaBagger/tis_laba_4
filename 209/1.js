function func (num) {
	let k = 0
	if (num < 10) {
		return k
	}
	while (num > 10) {
		num /= 2
		k += 1
	}
	return k
	}

console.log(func(21))