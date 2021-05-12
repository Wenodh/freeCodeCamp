function palindrome(stri) {
  let a =stri.toLowerCase()
  let str = a.replace(/[^a-z0-9]/g,"")
  return str===str.split("").reverse().join("")
}



palindrome("_eye");