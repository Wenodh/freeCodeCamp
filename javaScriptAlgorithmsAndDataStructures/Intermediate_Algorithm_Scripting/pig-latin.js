function translatePigLatin(str) {
  let res
  
  

    str[0] === 'a' || str[0] === 'e' || str[0] === "i" || str[0] === 'o' || str[0] === 'u'
    ? res = str + 'way'
    : res = str.substr(str.match(/^[^aeiou]+/)[0].length) + str.match(/^[^aeiou]+/)[0] + 'ay'



   console.log(res)
  return res;
}


translatePigLatin("consonant");
translatePigLatin("california")
translatePigLatin("eight")
translatePigLatin("glove")