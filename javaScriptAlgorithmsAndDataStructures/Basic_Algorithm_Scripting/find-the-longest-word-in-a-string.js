function findLongestWordLength(str) {
  let len = 0
  str.split(" ").forEach(it =>(len<it.length)?len=it.length:null)
  return len;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));