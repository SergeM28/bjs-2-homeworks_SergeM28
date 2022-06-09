//Задание 1

function getArrayParams(arr) {
  let min, max, sum, avg;
  min = arr[0];
  max = arr[0];
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    else {
      max = arr[i];
    }
    sum += arr[i];
    avg = sum / arr.length; 
    
  }
  return { min: min, max: max, avg: avg= Number(avg.toFixed(2)) };
}
console.log(getArrayParams([1, 2, 3, -100, 10]))


// Задание 2

function worker(arr) {
  let sum;
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;
  max = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
         if (func(arrOfArr[i]) > max) {
           max = func(arrOfArr[i]);
     }
    }
  return max;
}
console.log(worker([1, 2, 3])); 
console.log(worker([4, 5, 6])); 
 arrOfArr = [[1, 2, 3], [7, 5, 6]];
console.log(makeWork(arrOfArr, worker)); 

// Задание 3

function worker2(arr) {
  let min, max;
  min = arr[0];
  max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }

    else {
      max = arr[i];
    }
  }
let diff = Math.abs(max - min);
  return diff;
}

function makeWork(arrOfArr, func) {
  let max;
  max = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
         if (func(arrOfArr[i]) > max) {
           max = func(arrOfArr[i]);
     }
    }
  return max;
}
console.log(worker2([-10, -20, -40])); 
console.log(worker2([10, 20, 30])); 
 arrOfArr = [[-10, -20, -40], [10, 20, 30]];
console.log(makeWork(arrOfArr, worker2));