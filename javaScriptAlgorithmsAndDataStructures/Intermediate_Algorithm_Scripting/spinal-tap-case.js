function spinalCase(str) {
  let replace = str;
console.log(replace)
  return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
}

spinalCase("AllThe_small Things")