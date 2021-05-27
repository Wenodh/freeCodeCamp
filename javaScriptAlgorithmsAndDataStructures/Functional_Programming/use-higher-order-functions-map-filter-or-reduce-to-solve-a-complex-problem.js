const squareList = arr => {
  // Only change code below this line
  return arr.filter(it=> it>0 && it%parseInt(it)===0)
  .map(it=> it*it);
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);