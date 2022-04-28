var elements = [], top = -1;
const MAX = 10;

function push(number) {
  if (top < MAX) {
    top += 1;
    elements[top] = number;
  } else {
    console.log('Ouch! Sorry, stack is full.');
  }
}

function pop() {
  if (top != -1) {
    let number = elements[top];
    top = top -1;
    return number;
  } else {
    console.log('Empty Stack.')
  }
}

function isEmpty () {
  return top === -1;
}

 push(10);
 push(20);
 push(40);
 console.log(elements);

 console.log(pop());
 console.log(pop());
 console.log(pop());

var decimalNumber = 18;

while (decimalNumber != 0) {
  rest = parseInt(decimalNumber % 2);
  push(rest)
  decimalNumber = parseInt(decimalNumber / 2);
}

while (!isEmpty()) {
  console.log(pop())
}