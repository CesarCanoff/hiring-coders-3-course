# JavaScript Básico

## Introdução ao JavaScript e Variáveis

Explicações simples de JS, como variáveis, e prompt.

[O que é JavaScript? - Aprendendo desenvolvimento web | MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript)

## Números e Operadores

```jsx
var operador = 100;
var operando = 50;

var resultado = operador * operando;
console.log(resultado);

var name = "César";
var lastName = "Canoff";

console.log(`Your name is ${name} ${lastName}`);

var firstValue = 10;
var secondValue = "5";

console.log(firstValue - secondValue);
```

## Boas práticas em JavaScript

[https://www.youtube.com/watch?v=Fu6p9TidKZc](https://www.youtube.com/watch?v=Fu6p9TidKZc)

- Nomes de variáveis devem ser em camelCase;
- Todas as variáveis devem começar com uma letra;
- Sempre colocar espaços entre os operadores e depois da vírgula;
- Para indentação, usar sempre dois espaços;
- Sempre termine uma instrução simples com ponto e vírgula;
- Sempre colocar a abertura de chaves na mesma linha da escrita da função, ou do objeto;
    - Use um espaço entre a declaração da função e a abertura da chave;
    - Coloque a chave de fechamento em uma linha isolada.
- Cada linha de código é ideal que não ultrapasse 80 caracteres;
- Sempre utilize arquivos externos para seu HTML invocar o JS;
- Nomes de arquivos devem sempre começar com letras minúsculas.

---

## Condicionais

```jsx
var userName = "Cassy";

if (userName === 'César') {
  console.log(`Hello, ${userName}`);
} else if (userName === 'Anna') {
  console.log(`Hello, ${userName}`);
} else {
  console.log('Hello, dude!');
}

switch (userName) {
  case "César":
    console.log(`Hello, ${userName}`);
    break;
  case "Anna":
    console.log(`Hello, ${userName}`);
    break;
  case "Julio":
    console.log(`Hello, ${userName}`);
    break;
  case "Marie":
    console.log(`Hello, ${userName}`);
    break;
  default:
    console.log('Hello, dude!');
}
```

## Estrutura de Repetição - For

```jsx
var sortNumber = 10;

for (let i = 0; i < 100; i++) {}
```

## Estrutura de Repetição - While

```jsx
var find = false;

while(!find) {
  console.log('Achou!');
  find = true;
}
```

## Funções

```jsx
function sum(number_1, number_2) {
  return number_1 + number_2;
}

console.log(sum(5, 7));
```

## Classes

```jsx
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
```