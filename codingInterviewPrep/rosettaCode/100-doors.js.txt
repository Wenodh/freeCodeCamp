let ans = []
for(let i =1;i*i <=100;i++){
  ans.push(i*i)
}
// console.log(ans)

function getFinalOpenedDoors(numDoors) {
  return ans.filter(it=>it<=numDoors)
}
getFinalOpenedDoors(100)