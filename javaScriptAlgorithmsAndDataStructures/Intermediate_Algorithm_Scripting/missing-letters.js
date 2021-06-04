function fearNotLetter(str) {
  let currentChar=str.charCodeAt(0)
  let missing = undefined
  str.split('').forEach(it=>{
    if(it.charCodeAt(0)===currentChar){
      console.log(currentChar)
      currentChar++
      console.log(currentChar)
    }else{
      missing=String.fromCharCode(currentChar)
    }
  })
  return missing;
}

console.log(fearNotLetter("abce"));