const countdown = (count, output = "") => {
  for (let a = count; a > 0; a--) {
    for (let b = a; b > 0; b--) {
      output += b;
    }
    for (let c = count; c > a; c--) {
      output += c;
    }
    output += "\n";
  }
  return output;
};

const hollowPyramid = (count, output = "") => {
  for (a = 0; a < count; a++) {
    for (b = count; b > a; b--) {
      output += b;
    }

    for (c = 0; c < a; c++) {
      output += " ";
    }
    for (d = 2; d <= count; d++) {
      if (d <= a) {
        output += " ";
      } else {
        output += d;
      }
    }

    if (a >= b - 1) {
      output += "\n";
    }
  }
  return output;
};

console.log(countdown(5));
console.log(hollowPyramid(5));
