# Estrutura de Dados

## Introdução

Explicação do curso...

---

## Pilhas I

Explicação de Filas/Vetores

---

## Pilhas II

```jsx
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
```

## Filas e Listas

Introdução e explicação.

---

## Busca I

```jsx
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
```

## Busca II

```jsx
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
```

## Algoritmos de Ordenação

```jsx
var values = [8, 7, 6, 5, 4, 3, 2, 1]

function ordena() {
  let inicio = 0,
    fim = 8,
    temp

  for (vezes = 1; vezes < 8; vezes++) {
    for (pos = inicio; pos < fim - 1 - vezes; pos++) {
      if (values[pos] > values[pos + 1]) {
        tmp = values[pos]
        values[pos] = values[pos + 1]
        values[pos + 1] = tmp
      }
    }
  }
}
ordena()
console.log('Vetor Ordenado')
console.log(values)
```

## Algoritmos de Ordenação II

Uma explicação valiosíssima de Hash e Tree