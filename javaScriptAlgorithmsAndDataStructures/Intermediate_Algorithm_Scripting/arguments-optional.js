function addTogether() {
  let a = arguments[0]
  if(typeof(a)==="number"){
     if(arguments.length===1){
       return (b)=>{
         if(typeof(b)==="number") return a+b;
       }
       }
        else {
          if(typeof(arguments[1])==='number')
          return a+arguments[1]
     }
  }
}

 console.log(addTogether(2,"3"));
 console.log(addTogether(5)(7))
 console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"))