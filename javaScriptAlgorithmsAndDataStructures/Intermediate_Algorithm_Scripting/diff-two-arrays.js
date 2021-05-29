function diffArray(arr1, arr2) {

  var newArr = arr1.concat(arr2).filter(it => !arr1.includes(it) || !arr2.includes(it));
 console.log(newArr)
  return newArr
}

diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);