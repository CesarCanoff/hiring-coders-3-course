# CSS

# O QUE VAMOS ABORDAR?

1. O que é CSS e a sua importância;
2. Projeto de Portfólio;
3. Propriedades, Tags e Seletores;
4. Flexbox e Grid;
5. Hover e Animações;
6. Responsividade.

---

## O que é CSS e a sua Importância

### O que é  CSS?

CSS assim como o HTML, não é uma linguagem de programação.

- CSS (Cascading Style Sheets):
    - A sigla significa Folha de Estilo em Cascatas, e é uma maneira de inserir estilo em códigos de HTML.

---

## Responsividade

- Qual a importância de fazer um design responsivo?
    - Em 2016 usuários de celulares e desktops eram iguais em porcentagem, em 2020 acredita-se que os usuários de celulares eram 68%, globalmente.
    - Com um design responsivo, o layout muda (através do css) com base no tamanho e nas capacidades do dispositivo.
- O que levar em consideração na responsividade?
    1. Mantenha seu código limpo;
    2. Evite estilos inlines;
    3. Utilize grids flexíveis;
    4. Evite estilos absolutos;
    5. Use Media Queries.

---

## Mobile First

- Existe diferenças entre Mobile First e Design Responsivo?
    - Mobile first é o conceito que se dá quando a criação de projetos web e sites primeiro em dispositivos móveis, para depois fazer adaptações para o desktop e outras plataformas, ao invés de começar nas telas maiores.

---

- Vantagens (Mobile First)
    - Otimização do Carregamento;
    - Melhor experiência do usuário;
    - Melhor ranqueamento no Google.
- Desvantagens (Mobile First)
    - Não é apropriado para sites com muita informação;
    - Experiência no Desktop pode não ser tão boa.

---

## Tipos de Estilo

```html
<!DOCTYPE html>
<html>
  <head>
    <title>CSS</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1 style="color: purple">César Canoff</h1>
    <p style="color: purple">Lorem ipsum dolor sit amet.</p>
    <ul>
      <li style="color: purple">I9</li>
      <li style="color: purple">Coisa #2</li>
      <li style="color: purple">Coisa #3</li>
    </ul>
  </body>
</html>
```

```css
body {
  color: purple;
}

li {
  text-decoration: double;
}

ul {
  border: 1px solid yellow;
}
```

## Classes, Tags e IDs

```html
<!DOCTYPE html>
<html>
  <head>
    <title>CSS</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Shop César Canoff</h1>
    <div>
      <button id="login">Log-in</button>
      <button id="sign">Sign-Up</button>
    </div>

    <div class="copy">
      <p>Todos os direitos reservados a não sei quem!</p>
    </div>
    
  </body>
</html>
```

```css
body {
  text-align: center;
  border: 0;
}

#login, #sign {
  background-color: #000;
  color: red;
}

/* Classes */
.copy {
  font-size: 19px;
}
```

## Propriedades

```html
<!DOCTYPE html>
<html>
  <head>
    <title>CSS</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Shop César Canoff</h1>
    <div class="container">
      <p>Lorem ipsum dolor sit amet consectetur</p>
      <p>Lorem ipsum dolor sit amet, consectetur</p>
    </div>
    <footer>
      <ul class="lista__footer">
        <a href="1"><li>Nossa Missão</li></a>
        <a href="2"><li>Nossas Lojas</li></a>
        <a href="3"><li>Trabalhe Conosco</li></a>
      </ul>
    </footer>
  </body>
</html>
```

```css
body {
  text-align: center;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

p {
  text-align: justify;
  padding: 0 10px;
}

.lista__footer {
  list-style: none;
  display: flex;
  justify-content: center;
}

a {
  text-decoration: none;
  color: blueviolet;
}

li {
  padding: 10px;
  background-color: aqua;
  margin: 0 100px;
}
```

## Seletores

```css
* {
  color: red;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  text-align: center;
}

/* #primeiro {
  border: 1px solid green;
  margin: 30px;
}

#segundo {
} */

.navigation,
nav span {
  color: purple;
  cursor: pointer;
}

.navigation,
nav span:hover {
  text-decoration: wavy;
  color: chocolate;
}

#primeiro,
#segundo {
  border: 5px solid #000;
  padding: 15px;
  margin: 5px;
}

#segundo > p {
  color: cornflowerblue;
}
```

## Apresentação do Projeto

### Montando nosso HTML

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
      integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <title>César Canoff</title>
  </head>
  <body>
    <header>
      <div>
        <p>César Canoff</p>
      </div>
      <ul>
        <li><a target="_blank" href="github.com/CesarCanoff">GitHub</a></li>
        <li><a target="_blank" href="https://wa.me/67 1234-5678">WhatsApp</a></li>
        <li><a target="_blank" href="mailto:teste@teste.com">E-mail</a></li>
      </ul>
    </header>
    <main>
      <section>
        <div class="name">
          <h1>César Canoff</h1>
          <h5>Software Enginner</h5>
        </div>

        <div id="arrow">
          <i class="fas fa-sort-down"></i>
        </div>
        <div id="about">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, dolor unde assumenda provident ipsa tempora? Voluptatibus quas quasi dolore, cumque sed reiciendis animi, sunt suscipit, perferendis optio laborum doloribus quo!</p>
        </div>

        <div class="form">
          <div>
            <p>Deixe seu contato!</p>
          </div>
          <form>
            <input type="text" placeholder="Seu melhor e-mail" />
          </form>
        </div>
      </section>
    </main>
  </body>
</html>
```

## Predefinições Iniciais

```css
* {
  padding: 0;
  border: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  list-style-type: none;
}
```

## Cores e Background

```css
* {
  padding: 0;
  border: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  list-style-type: none;
  color: rgb(0, 127, 186);
}

html, body {
  height: 100%;
}

body {
  background: #000 url('./images/background.jpg') no-repeat center fixed;
  background-size: cover;
}
```

## Fontes

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
      integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="style.css" />
    <title>César Canoff</title>
  </head>
  <body>
    <header>
      <div>
        <p>César Canoff</p>
      </div>
      <ul>
        <li><a target="_blank" href="github.com/CesarCanoff">GitHub</a></li>
        <li>
          <a target="_blank" href="https://wa.me/67 1234-5678">WhatsApp</a>
        </li>
        <li><a target="_blank" href="mailto:teste@teste.com">E-mail</a></li>
      </ul>
    </header>
    <main>
      <section class="container">
        <div class="name">
          <h1>César Canoff</h1>
          <h5>Software Enginner</h5>
        </div>

        <div id="arrow">
          <i class="fas fa-sort-down"></i>
        </div>
        <div id="about">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, dolor
            unde assumenda provident ipsa tempora? Voluptatibus quas quasi
            dolore, cumque sed reiciendis animi, sunt suscipit, perferendis
            optio laborum doloribus quo!
          </p>
        </div>

        <div class="form">
          <div>
            <p>Deixe seu contato!</p>
          </div>
          <form>
            <input type="text" placeholder="Seu melhor e-mail" />
          </form>
        </div>
      </section>
    </main>
  </body>
</html>
```

```css
* {
  padding: 0;
  border: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  list-style-type: none;
  color: rgb(0, 127, 186);
}

html, body {
  height: 100%;
}

body {
  background: #000 url('./images/background.jpg') no-repeat center fixed;
  background-size: cover;
}

.container {
  text-align: center;
}

.container .name h1 {
  font-size: 3rem;
}

.container .name h5 {
  font-size: 1.5rem;
}
```

## Definir Width

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
      integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="style.css" />
    <title>César Canoff</title>
  </head>
  <body>
    <header>
      <div>
        <p>César Canoff</p>
      </div>
      <ul>
        <li><a target="_blank" href="github.com/CesarCanoff">GitHub</a></li>
        <li>
          <a target="_blank" href="https://wa.me/67 1234-5678">WhatsApp</a>
        </li>
        <li><a target="_blank" href="mailto:teste@teste.com">E-mail</a></li>
      </ul>
    </header>
    <main>
      <section class="container">
        <div class="name">
          <h1>César Canoff</h1>
          <h5>Software Enginner</h5>
        </div>

        <div id="arrow">
          <i class="fas fa-sort-down"></i>
        </div>
        <div id="about">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, dolor
            unde assumenda provident ipsa tempora? Voluptatibus quas quasi
            dolore, cumque sed reiciendis animi, sunt suscipit, perferendis
            optio laborum doloribus quo!
          </p>
        </div>

        <div class="form">
          <div>
            <p>Deixe seu contato!</p>
          </div>
          <form>
            <input type="text" placeholder="Seu melhor e-mail" />
            <input type="submit" value="Enviar" />
          </form>
        </div>
      </section>
    </main>
  </body>
</html>
```

```css
* {
  padding: 0;
  border: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  list-style-type: none;
  color: rgb(0, 127, 186);
}

html, body {
  height: 100%;
}

body {
  background-color: #000;
}

.container {
  text-align: center;
}

.container .name h1 {
  font-size: 3rem;
}

.container .name h5 {
  font-size: 1.5rem;
}

.container #about p {
  max-width: 600px;
  margin: 0 auto;
}

.form {
  width: 40%;
}

.form input {
  width: 50%;
}

.form input[type=submit] {
  width: 15%;
}
```

## Flexbox

- Como funciona?
    - Normalmente o padrão de display é baseado em blocos que podem ser inline ou block. Já no flexbox, podemos agrupar de forma flexivel vários conteúdos dentro do container mãe;
    - Por padrão o flexbox vai colocar todos na mesma linha, para quebrar de linha useflex-wrap: wrap.
- Propriedades
    - flex-wrap;
    - justify-content;
    - align-items

---

```css
* {
  padding: 0;
  border: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  list-style-type: none;
  color: rgb(0, 127, 186);
}

html, body {
  height: 100%;
}

body {
  background-color: #000;
}

header {
  display: flex;
  justify-content: space-between;
  padding: 1%;
}

header ul {
  display: flex;
}

header ul li {
  margin: 0 20px;
}

.container {
  text-align: center;
}

.container .name h1 {
  font-size: 3rem;
}

.container .name h5 {
  font-size: 1.5rem;
}

.container #about p {
  max-width: 600px;
  margin: 0 auto;
}

.form {
  width: 40%;
}

.form input {
  width: 50%;
}

.form input[type=submit] {
  width: 15%;
}
```

## Grid

Explicação do que são as Colunas e Linhas do display Grid.

## Bordas

```css
* {
  padding: 0;
  border: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  list-style-type: none;
  color: rgb(0, 127, 186);
}

html, body {
  height: 100%;
}

body {
  background-color: #000;
}

header {
  display: flex;
  justify-content: space-between;
  padding: 1%;
  box-shadow: 1px 1px 10px 1px rgb(0, 127, 186);
}

header ul {
  display: flex;
}

header ul li {
  margin: 0 20px;
}

.container {
  text-align: center;
}

.container .name h1 {
  font-size: 3rem;
}

.container .name h5 {
  font-size: 1.5rem;
}

.container #about p {
  max-width: 600px;
  margin: 0 auto;
}

.form {
  width: 40%;
}

.form input {
  width: 50%;
}

.form input[type=submit] {
  width: 15%;
}
```

## Hover

```css
* {
  padding: 0;
  border: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  list-style-type: none;
  color: rgb(0, 127, 186);
}

html, body {
  height: 100%;
}

body {
  background-color: #000;
}

header {
  display: flex;
  justify-content: space-between;
  padding: 1%;
  box-shadow: 1px 1px 10px 1px rgb(0, 127, 186);
}

header ul {
  display: flex;
}

header ul li {
  margin: 0 20px;
}

header ul li a:hover {
  text-decoration: underline;
}

.container {
  text-align: center;
}

.container .name h1 {
  font-size: 3rem;
}

.container .name h5 {
  font-size: 1.5rem;
}

.container #about p {
  max-width: 600px;
  margin: 0 auto;
}

.form {
  width: 40%;
}

.form input {
  width: 50%;
}

.form input[type=submit] {
  width: 15%;
}
```

## Animações

```css
* {
  padding: 0;
  border: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  list-style-type: none;
  color: rgb(0, 127, 186);
}

html, body {
  height: 100%;
}

body {
  background-color: #000;
}

header {
  display: flex;
  justify-content: space-between;
  padding: 1%;
  box-shadow: 1px 1px 10px 1px rgb(0, 127, 186);
}

header ul {
  display: flex;
}

header ul li {
  margin: 0 20px;
}

header ul li a:hover {
  text-decoration: underline;
}

.container {
  text-align: center;
}

#arrow {
  font-size: 35px;
  cursor: pointer;
  animation: blink 1.3s steps(5, start) infinite;
}

.show {
  display: block !important;
}

@keyframes blink {
  to {
    visibility: hidden;
  }
}

.rotate {
  transform: rotateX(180deg);
  transition: 300ms;
}

.container .name h1 {
  font-size: 3rem;
}

.container .name h5 {
  font-size: 1.5rem;
}

.container #about p {
  max-width: 600px;
  margin: 0 auto;
}

.form {
  width: 40%;
}

.form input {
  width: 50%;
}

.form input[type=submit] {
  width: 15%;
}
```

## Ajustes e Responsividade

```css
* {
  padding: 0;
  border: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  list-style-type: none;
  color: rgb(0, 127, 186);
}

html, body {
  height: 100%;
}

body {
  background-color: #000;
}

header {
  display: flex;
  justify-content: space-between;
  padding: 1%;
  box-shadow: 1px 1px 10px 1px rgb(0, 127, 186);
}

header ul {
  display: flex;
}

header ul li {
  margin: 0 20px;
}

header ul li a:hover {
  text-decoration: underline;
}

.container {
  text-align: center;
}

#arrow {
  font-size: 35px;
  cursor: pointer;
  animation: blink 1.3s steps(5, start) infinite;
}

.show {
  display: block !important;
}

@keyframes blink {
  to {
    visibility: hidden;
  }
}

.rotate {
  transform: rotateX(180deg);
  transition: 300ms;
}

.container .name h1 {
  font-size: 3rem;
}

.container .name h5 {
  font-size: 1.5rem;
}

.container #about p {
  max-width: 600px;
  margin: 0 auto;
}

.form {
  width: 40%;
}

.form input {
  width: 50%;
}

.form input[type=submit] {
  width: 15%;
}

@media only screen and (max-width: 480px) {
  .container .name h1 {
    font-size: 2rem;
  }

  .container .name h5 {
    font-size: 1rem;
  }

  #about {
    width: 80%;
  }
}
```

## Considerações Finais

- A importância do CSS;
- Projeto;
- Propriedades, Seletores, Flexbox e Grid;
- Animações;
- Responsividade.

---