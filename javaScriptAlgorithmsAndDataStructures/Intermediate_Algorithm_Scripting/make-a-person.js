var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let name= firstAndLast.split(" ")
  // let first = name[0]
  // let last =name[1]
  //console.log(name.length)
  this.getFullName = function() {
    return name.join(' ')
  };
  this.getFirstName=()=>{
    return name[0]
  }
this.getLastName=()=>{
  return name[name.length-1]
}

this.setFirstName=(first)=>{
  return name[0]=first
}
this.setLastName=(last)=>{
  return name[1]=last
}
this.setFullName=(firstAndLast)=>{
  return name=firstAndLast.split(" ")
}
  
};

var bob = new Person('Bob Ross');
console.log(bob.getLastName());
bob.setFullName("Haskell Curry")
console.log(bob.getFullName());