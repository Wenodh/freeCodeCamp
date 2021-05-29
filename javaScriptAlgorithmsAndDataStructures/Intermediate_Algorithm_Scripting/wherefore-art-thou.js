function whatIsInAName(collection, source) {
  var arr = [];
  
//   console.log(collection[0][skey]
// )
  // Only change code below this line
  let skey = Object.keys(source)
  arr=collection.filter((obj)=>{
    return skey.every((it)=>{
    return obj.hasOwnProperty(it) && obj[it] === source[it]
    })
  })
  console.log(arr)
  // Only change code above this line
  return arr;
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })