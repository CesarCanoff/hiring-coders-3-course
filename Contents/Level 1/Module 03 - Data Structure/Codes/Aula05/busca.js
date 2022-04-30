var values = [5, 77, 543, 324, 23, 39, 120];

function search(number) {
  for (let i = 0; i < values.length; i++) {
    if (number === values[i]) {
      return i;
    }
  }

  return -1;
}

console.log(search(10))
console.log(search(77))
console.log(search(05))
console.log(search(23))