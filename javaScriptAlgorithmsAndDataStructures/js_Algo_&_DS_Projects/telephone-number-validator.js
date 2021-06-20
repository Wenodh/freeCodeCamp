function telephoneCheck(str) {
  //https://www.w3schools.com/jsref/jsref_obj_regexp.asp
  let r = /^(1 |1)?(\d{3}|\(\d{3}\))[- ]?\d{3}[ -]?\d{4}$/g
  console.log(str.match(r))
  return r.test(str);
}

telephoneCheck("1 555-555-5555");
telephoneCheck("(555) 555-5555");
telephoneCheck("5555555555");
telephoneCheck("555-555-5555");
telephoneCheck("(555)555-5555");
telephoneCheck("2 555-555-5555");