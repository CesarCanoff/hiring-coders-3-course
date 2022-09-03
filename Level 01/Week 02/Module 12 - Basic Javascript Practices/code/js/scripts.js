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
