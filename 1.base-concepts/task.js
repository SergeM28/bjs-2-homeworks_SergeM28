"use strict"
  function solveEquation(a, b, c) {
    let arr = {};
    let d = b**2 - 4 * a * c;
   console.log('D = ' + d);
  
   if (d < 0) {
   arr = [];
}
    else if (d === 0) {
      arr = (-b / (2 * a));
    }
    
    else if (d > 0) { 
        let res = [];
        res.push((-b + Math.sqrt(d)) / (2 * a));
        res.push((-b - Math.sqrt(d)) / (2 * a));
        arr = res;
    }
    return arr;
}
console.log(solveEquation(3,24,36));


