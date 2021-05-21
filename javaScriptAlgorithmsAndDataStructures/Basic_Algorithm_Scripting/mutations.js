function mutation(arr) {
  let a =arr[1]
  let b =arr[0].toLowerCase()
  for(let i=0;i<arr[1].length;i++){
    if(!b.includes(a.charAt(i).toLowerCase())) return false
  }
  return true;
}

mutation(["hello", "hey"]);