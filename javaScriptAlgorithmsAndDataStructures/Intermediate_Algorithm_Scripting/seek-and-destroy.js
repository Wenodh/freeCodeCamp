function destroyer(arr, ...remove) {
  //console.log(arr.filter(it=>!remove.includes(it)))
  return arr.filter(it=>!remove.includes(it));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);