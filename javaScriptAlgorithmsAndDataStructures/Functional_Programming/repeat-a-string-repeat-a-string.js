function repeatStringNumTimes(str, num) {
  if(num<1) return ""
let a =str
  for(let i=1;i<num;i++){
    a += str
  }
  console.log(a)
  return a;
}

repeatStringNumTimes("abc", 3);