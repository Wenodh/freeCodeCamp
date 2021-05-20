function bouncer(arr) {
  let newArray = []
  for(let i =0;i<arr.length;i++){
    if(!arr[i]){
    }
    else {
      newArray.push(arr[i])
    }
  }
  return newArray;
}

console.log(bouncer([null, NaN, 1, 2, undefined]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]))