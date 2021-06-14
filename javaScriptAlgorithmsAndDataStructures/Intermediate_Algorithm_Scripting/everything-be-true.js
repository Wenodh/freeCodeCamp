function truthCheck(collection, pre) {
  return collection.every((it)=>{
    return it.hasOwnProperty(pre) && Boolean(it[pre])
  })
 
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");