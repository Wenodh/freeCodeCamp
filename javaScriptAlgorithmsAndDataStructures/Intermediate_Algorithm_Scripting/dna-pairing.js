function pairElement(str) {
  let pair={
    A:'T',
    T:'A', 
    G:'C',
    C:'G'
  }
  console.log(str.split('').map(it=> [it,pair[it]]))
  return str.split('').map(it=> [it,pair[it]]);
}

pairElement("GCG");