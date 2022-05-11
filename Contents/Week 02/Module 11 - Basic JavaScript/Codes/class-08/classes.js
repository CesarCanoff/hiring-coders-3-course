class Math {
  som(value_1, value_2) {
    return value_1 + value_2;
  }

  subtr(value_1, value_2) {
    return value_1 - value_2;
  }

  mult(value_1, value_2) {
    return value_1 * value_2;
  }

  div(value_1, value_2) {
    return value_1 / value_2;
  }

}

var math = new Math();
console.log(math.som(5, 5));
console.log(math.subtr(5, 5));
console.log(math.mult(5, 5));
console.log(math.div(5, 5));