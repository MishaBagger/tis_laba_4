let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let obj2 = {} 
for (let i in obj) {
	if (obj[i] % 2 == 0) {
		obj2[i] = obj[i] 
	}
}
console.log(obj2)