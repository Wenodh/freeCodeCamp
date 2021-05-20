function titleCase(str) {
  return str.toLowerCase().split(" ").map(it=> it.replace(it.charAt(0),it.charAt(0).toUpperCase())).join(" ")
}

titleCase("I'm a little tea pot");