var array=[];
function rangeOfNumbers(startNum, endNum) {
 array.push(startNum)
 if(startNum != endNum) {
   
   return rangeOfNumbers(startNum+1,endNum)
 }
 if(startNum === endNum){
   return array
 }
};
console.log(rangeOfNumbers(1,5))
array=[]