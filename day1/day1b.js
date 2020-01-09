// var name = "hehe";
// var count = 5;

const wordH = (count, output = "") => {
  if (count % 2 === 0) {
    return "harus ganjil";
  } else {
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        if (i === (count - 1) / 2) {
          output += "*";
        } else if (j === 0 || j === count - 1) {
          output += "*";
        } else {
          output += " ";
        }
      }
      output += "\n";
    }
    return output;
  }
};

console.log(wordH(7));

// export default name;
