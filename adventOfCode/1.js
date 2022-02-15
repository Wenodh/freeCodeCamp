let input = [234, 45678, 1721, 979, 366, 299, 675, 1456];
function a() {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] + input[j] === 2020) {
        console.log(input[i]);
        console.log(input[j]);
      } else {
        console.log("hi");
      }
    }
  }
}
a();
