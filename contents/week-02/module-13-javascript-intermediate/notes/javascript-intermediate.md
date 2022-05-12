# JavaScript Intermediário

## Template String

```jsx
let myName = 'César';
let lastName = 'Canoff';
let myJob = "Full-Stack Developer";

// TEMPLATE STRINGS
console.log(`Olá, meu nome é ${myName} ${lastName} eu sou ${myJob}`);
```

## **Operador Ternário e Arrow Functions**

```jsx
let isValid = true;

// SEM TERNÁRIO
function verify(isValid) {
  if (isValid) {
    return true;
  } else {
    return false;
  }
}

// COM TERNÁRIO
const IsValid_2 =  isValid ? true : false;
```

```jsx
function soma (x, y) {
  return x + y;
}

const multi = function (a, b) {
  return a * b;
}

const div = (z, w) => {
  return z / w;
}
```

## Operador Spread

```jsx
let lista = [1, 2, 5];
let listaInc = [3, 4];

const listResult = [1, 2, ...listaInc, 5];
console.log(listResult);
```

## **Desestruct e Match**

```jsx
const Pessoa = {
  name: 'Anna',
  lastName: 'Festyt',
  age: 20,
  job: 'Written'
}

let { name, lastName, age, job } = Pessoa;
```

```jsx
const cpf = "060.278.291-09";

const regex = new RegExp("[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}");

console.log(cpf.match(regex));
```

## **SPA, PWA e WebComponents**

- React;
- Angular;
- Vue.js;

---

### PROGRESSIVE WEB APPS

- Progressivo
    - Funcionando para qualquer usuário em qualquer navegador escolhido;
- Responsivo
    - Adequando-se a qualquer formato, seja ele desktop, celular, tablet, etc;
- Independente de Conectividade
    - Aprimorado através de Service Workers para trabalhar offline ou com conexão limitada;
- Semelhante a Aplicativos
    - Deve ter interface similar a um app para usuários, oferecendo os mesmos recursos independente do dispositivo;
- Sincronizado
    - Mantendo-se atualizado constantemente pelo Service Workers;
- Seguro
    - Sempre com conexão (quando disponível) via HTTPS;
- Reenvolvente
    - Deve gerar engajamento através de notificações PUSH;
- Instalável
    - Possibilidade de “guardar” o aplicativo sem necessariamente instalá-lo;
- Linkável
    - Facilmente compartilhável com um link, reduzindo o atrito das lojas de aplicativos;

---

### ESPECIFICAÇÕES WEBCOMPONENTS

- HTML TEMPLATE
    - Possibilita a criação de fragmentos HTML que podem ser invocados sempre que necessário;
- Custom Elements
    - Capacidade de criar componentes customizados
- Shadow DOM
    - Estilos e diretivas globais ficam encapsulados, ou seja, cada componente não é capaz de interferir nos demais;
- ES MODULES
    - Possibilidade de carregar módulos nativamente;

---