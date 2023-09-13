function nechetnie(num) {
  let chislo = String(num);
  for (let i of chislo) {
    if (+i % 2 == 0) {
      return false;
    } else {
      return true;
    }
  }
}
console.log(nechetnie(2));
