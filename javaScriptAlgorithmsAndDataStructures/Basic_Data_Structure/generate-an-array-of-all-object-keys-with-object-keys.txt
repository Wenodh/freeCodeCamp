let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Only change code below this line
let arr=[]
for(let i in obj){
  arr.push(i)
}
return arr
  // Only change code above this line
}

console.log(getArrayOfUsers(users));