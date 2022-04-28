var values = [5, 8, 10, 22, 38, 45, 60, 90, 100, 120];

function search(number) {
  for (let i = 0; i < values.length; i++) {
    if (number === values[i]) {
      return i;
    }
  }

  return -1;
}

function binarySearch(number) {
  let start = 0, middle, end = 9;

  while (start <= end) {
    middle = parseInt((start + end) / 2);
    if (number == values[middle]) {
      return middle;
    } else {
      if (number > values[middle]) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }
  }
  return -1;
}

console.log(binarySearch(60));