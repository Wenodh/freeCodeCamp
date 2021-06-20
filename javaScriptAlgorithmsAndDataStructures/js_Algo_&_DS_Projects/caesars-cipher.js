function rot13(str) {
  let stri = ''
  let result
  for (let i = 0; i < str.length; i++) {
    let a = str.charCodeAt(i)
    if (a > 64 && a < 91) {
      (a + 13 > 90) ? stri += String.fromCharCode(a - 13)
        : stri += String.fromCharCode(a + 13)
    } else {
      stri += str[i]
    }
  }
  console.log(stri)
  return stri;
}

rot13("SERR PBQR PNZC");