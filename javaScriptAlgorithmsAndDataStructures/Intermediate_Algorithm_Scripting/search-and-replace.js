function myReplace(str, before, after) {
  let checkUpperCase = before.charAt(0)
  return checkUpperCase === checkUpperCase.toUpperCase() ?str.replace(before,after.charAt(0).toUpperCase()+after.slice(1))
  :str.replace(before,after.toLowerCase());
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));