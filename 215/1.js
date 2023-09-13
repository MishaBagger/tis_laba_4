function sum(arr) {
  let result = 0;

  for (let i of arr) {
    result += i;
  }
  return result;
}
console.log(sum([1, 2, 3, 4]));
