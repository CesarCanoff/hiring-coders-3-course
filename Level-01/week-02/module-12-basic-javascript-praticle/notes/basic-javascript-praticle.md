# JavaScript Básico - Prática

## Desafio: Validador de CPF

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>JavaScript Gama Academy</title>

    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
      integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
      crossorigin="anonymous"
    />

    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
      integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
      crossorigin="anonymous"
    />

  </head>

  <body>
    <div class="jumbotron">
      <div class="container">
        <h1 class="page-header">Validador de CPF</h1>
        <p>
          Através deste simples algoritmo, veremos diversos recursos e
          habilidades da linguagem Javascript
        </p>
      </div>
    </div>
    <div class="container formulario">
      <form>
        <div class="form-group">
          <div class="input-group input-group-lg">
            <span class="input-group-addon" id="sizing-addon1">CPF</span>
            <input
              type="text"
              class="form-control"
              id="cpf_digitado"
              maxlength="11"
              placeholder="Digite o cpf para validação..."
              aria-describedby="sizing-addon1"
            />
          </div>
          <small class="form-text text-muted">Digite somente números</small>
        </div>
        <button type="button" onclick="validacao()" class="btn btn-info">Validar !</button>
      </form>
    </div>
    <div class="container page-header">
      <div
        id="success"
        class="alert alert-success"
        style="display: none"
        role="alert"
      >
        <strong>Oba!</strong> Seu CPF é válido
      </div>
      <div
        id="error"
        class="alert alert-danger"
        style="display: none"
        role="alert"
      >
        <strong>Ops!</strong> Seu CPF não é válido
      </div>
    </div>
  </body>
  <script src="js/scripts.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

  <script
    src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
    crossorigin="anonymous"
    integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
  ></script>

</html>
```

```jsx
console.log("Olá Mundo!");

function validaCpf(cpf) {
  if (cpf.length != 11) {
    return false;
  } else {
    let numbers = cpf.substring(0, 9);
    let digit = cpf.substring(9);

    let soma = 0;
    for (let i = 10; i > 1; i--) {
      soma += numbers.charAt(10 - i) * i;
    }
    console.log(soma);

    let result = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    if (result != digit.charAt(0)) {
      return false;
    }

    soma = 0;

    numbers = cpf.substring(0, 10);

    for (let j = 11; j < 1; k--) {
      soma += numbers.charAt(11 - j) * j;
    }

    result = soma % 11 > 2 ? 0 : 11 - (soma % 11);

    if (result != digit.charAt(1)) {
      return false;
    }

    return true;
  }
}

function validacao() {
  let cpf = document.getElementById("cpf_digitado").value;
  document.getElementById("success").style.display = "none";
  document.getElementById("error").style.display = "none";
  var resultado = validaCpf(cpf);
  console.log(cpf);
  if (resultado) {
    document.getElementById("success").style.display = "block";
  } else {
    document.getElementById("error").style.display = "block";
  }
}
```