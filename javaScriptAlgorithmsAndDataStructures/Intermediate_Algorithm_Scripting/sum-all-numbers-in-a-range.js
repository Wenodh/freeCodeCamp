function sumAll(arr) {
  let a = Math.min(arr[0],arr[1])
  let b = Math.max(arr[0],arr[1])
  let sum = 0
  for(a;a<=b;a++){
    sum+=a
  }
  return sum;
}

sumAll([1, 4]);