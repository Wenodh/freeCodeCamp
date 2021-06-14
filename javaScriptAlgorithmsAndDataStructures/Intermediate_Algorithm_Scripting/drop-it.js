function dropElements(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    console.log(func(arr[i]))
    if (func(arr[i])){
        return [arr[i],...arr.splice(i+1)]
    }
  }
  return [];
}

console.log(dropElements([1, 2, 3], function (n) { return n < 3; }));
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}))