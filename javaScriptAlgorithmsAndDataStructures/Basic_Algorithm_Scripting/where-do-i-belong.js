function getIndexToIns(arr, num) {
  let a = arr.sort((a,b)=>a-b)
  console.log(a)
  for(let i=0;i<a.length;i++){
    if(num<=a[i]){
      console.log(i)
      return i
    } 
  }
  return arr.length;
}

getIndexToIns([5, 3, 20, 3], 5);