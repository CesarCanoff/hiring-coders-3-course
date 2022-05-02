# HTML

## Ferramentas e Estruturas

- Linguagem de Formatação e Estruturação;
- Ferramentas de Pesquisa;
    - W3Schools.com;
- Ferramenta de Desenvolvimento;
    - Visual Studio Code;
    - Sublime Text 3;
    - Notepad++;

Referências

- [https://developer.mozilla.org/pt-BR/docs/Web/HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)

## Tags

```html
<html>
  <head>
    <title>Minha Página HTML</title>
  </head>
  <body>
    <h1>Titulo 01</h1>
    <h2>Titulo 02</h2>
    <h3>Titulo 03</h3>
    <h4>Titulo 04</h4>
    <br />
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis minus
      suscipit consequuntur, ipsa amet modi accusantium ea sint at fugiat eaque
      ratione, laudantium alias facilis deserunt aperiam, non natus nostrum.
    </p>
  </body>
</html>
```

## Listas e Tabelas

- Listas Ordenadas;
- Listas Não Ordenadas.

---

- Estrutura Hierárquica.

---

```html
<html>
  <head>
    <title>Minha Página HTML</title>
  </head>
  <body>
    <h1>Lista Do Supermercado</h1>
    <hr />
    <p>Itens para a compra</p>
    <ol>
      <li>Arroz</li>
      <li>Feijão</li>
      <li>Café</li>
      <li>Leite</li>
    </ol>
  </body>
</html>
```

```html
<html>
  <head>
    <title>Minha Página HTML</title>
  </head>
  <body>
    <h1>Lista Do Supermercado</h1>
    <hr />
    <p>Itens para a compra</p>
    <img src="#" alt="Placeholder Image" />
    <table border="1" width="100%">
      <tr>
        <th>Item</th>
        <th>Quantidade</th>
      </tr>
      <tr>
        <td>Arroz</td>
        <td>5 Kg</td>
      </tr>
      <tr>
        <td>Feijão</td>
        <td>2 Kg</td>
      </tr>

      <tr>
        <td>Café</td>
        <td>10 Kg</td>
      </tr>
    </table>
  </body>
</html>
```

## Divisões 1

- Evite acentos nas marcações/tags;

---

```html
<html>
  <head>
    <title>Minha Lojinha On-line</title>
  </head>
  <body>
    <div id="cabecalho">
      <h1>Minha lójinha na Internet</h1>
    </div>
    <div id="navbar">
      <div><a href="index.html">Home</a></div>
      <div><a href="quem-somos.html">Quem Somos</a></div>
      <div><a href="contatos.html">Contato</a></div>
      <div><a href="fique-por-dentro.html">Fique Por Dentro</a></div>
    </div>
  </body>
</html>
```

## Divisões 2

```html
<html>
  <head>
    <title>Minha Lojinha On-line</title>
  </head>
  <body>
    <div id="cabecalho">
      <h1>Minha lójinha na Internet</h1>
    </div>
    <div id="navbar">
      <div><a href="index.html">Home</a></div>
      <div><a href="quem-somos.html">Quem Somos</a></div>
      <div><a href="contatos.html">Contato</a></div>
      <div><a href="fique-por-dentro.html">Fique Por Dentro</a></div>
    </div>
    <div id="imagem-geral">
      <img src="#" alt="Placeholder Image" />
    </div>
    <div id="titulo-destaque">
      <h2>Produtos em Destaque</h2>
    </div>

    <div id="produtos">
      <div class="produto-destaque">
        <img src="#" alt="Gift 1" />
        <h3>R$10,00</h3>
        <p>Lorem ipsum dolor sit, amet consectetur</p>
      </div>
      <div class="produto-destaque">
        <img src="#" alt="Gift 2" />
        <h3>R$20,00</h3>
        <p>Lorem ipsum dolor sit, amet consectetur</p>
      </div>
      <div class="produto-destaque">
        <img src="#" alt="Gift 3" />
        <h3>R$30,00</h3>
        <p>Lorem ipsum dolor sit, amet consectetur</p>
      </div>
    </div>
    <div id="rodape">
      <img src="#" alt="Placeholder Image" />
      <p>Telefone: +55 067 1234-5678</p>
      <p>test@email.com</p>
      <div id="email">
        <input type="email" id="inputEmail" placeholder="E-mail" />
        <input type="submit" value="Enviar" />
      </div>
    </div>
  </body>
</html>
```

### Revisão

- Escolha a sua **ferramenta** de uso;
- Salve o arquivo com **.html** no final;
- Estrutura **hierárquica**;
- <tag></tag>;
- <head> e <body>;
- Estrutura, tabelas. listas e **divisões.**