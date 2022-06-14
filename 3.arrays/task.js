function compareArrays(arr1, arr2) {
  let result;
result = (arr1.length === arr2.length && arr1.every(function(value, index) { 
  return value === arr2[index]}));
  return result;
}
  console.log(compareArrays([2,2,3,4], [2,2,3,4]))


  function advancedFilter(arr) {
    let result = arr.filter(i=>i>0).filter(i=>i%3===0).map(i=>i*10);
     return result;
   }
   console.log(advancedFilter([-1,6,-9,3]));
   console.log(advancedFilter([-10,-21,12,123]));
   console.log(advancedFilter([-1,-2]));