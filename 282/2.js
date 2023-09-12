let arr = [-2, 5, 1, -5, -1, 1, 3, 4, -1];

let res = arr.every(function(elem,index){
    if (elem * index < 30) {
     return true
    }
    else {
     return false
    }
 
 }) 

console.log(res);