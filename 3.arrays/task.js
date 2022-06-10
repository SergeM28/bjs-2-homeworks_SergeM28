function compareArrays(arr1, arr2) {
  let result;
result = (arr1.length === arr2.length && arr1.every(function(value, index) { 
  return value === arr2[index]}));
  return result;
}
  console.log(compareArrays([2,2,3,4], [2,2,3,4]))


  function advancedFilter(arr) {
    return function(x) {
      if (x > 0 && x % 3 === 0) {
        return x * 10;
      }
    }
  }
   arr = [12, 5, 6, 13, 9];
  console.log(arr.filter(advancedFilter()).map(advancedFilter()))