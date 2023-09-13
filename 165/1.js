let obj = { a: 10, b: 20, c: 30, d: 40, e: 50 };
let sum = 0;

for (let elem in obj) {
  let chislo = String(obj[elem]);
  if (chislo[0] == "1" || chislo[0] == "2") {
    sum += +chislo;
  }
}

console.log(sum);
