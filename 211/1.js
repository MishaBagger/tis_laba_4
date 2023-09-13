function chetnie(arr) {
	for (let elem of arr) {
		if (elem % 2 != 0) {
			return false;
		}
	}
	
	return true;
}
console.log(chetnie([1,2,3]))