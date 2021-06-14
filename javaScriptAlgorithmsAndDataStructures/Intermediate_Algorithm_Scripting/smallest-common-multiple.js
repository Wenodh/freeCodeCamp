function gcd(x, y) {
  return y == 0 ? x : gcd(y, x % y)
}
function smallestCommons(arr) {
  const a = Math.max(arr[0], arr[1])
  let b = Math.min(arr[0], arr[1])
  const checkArray = Array(a - b + 1).fill(0)
    .map(it=>b++)
  console.log(checkArray)
  //a*b = gcd *lcm
  let result = checkArray[0]
  for (let i = 0; i < checkArray.length; i++) {
    result = (result * checkArray[i]) / gcd(result, checkArray[i])
  }
  return result;
}

console.log(smallestCommons([23, 18]));