// Only change code below this line
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    return [n].concat(countdown(n - 1));
  }
}
console.log(countdown(5));
// Only change code above this line
