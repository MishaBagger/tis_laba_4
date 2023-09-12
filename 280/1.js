let arr = [1,2,3,4,5,6,7,8,9,10]
let sum = 0
arr.forEach(function(elem) {
    elem **= 2
    sum += elem
})
console.log(sum)