function steamrollArray(arr) {
 // console.log(Array.isArray(arr[3]))
  let result =[]
  for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
      result.push(...steamrollArray(arr[i]))
      //console.log(removeArray([[4]]))
    }else {
      result.push(arr[i])
    }
  }
  return result;
}
console.log(steamrollArray([1, [2], [3, [[4]]]]));