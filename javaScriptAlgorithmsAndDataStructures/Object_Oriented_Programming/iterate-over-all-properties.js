function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line
for(let pro in beagle){
  beagle.hasOwnProperty(pro)?ownProps.push(pro):prototypeProps.push(pro)
}