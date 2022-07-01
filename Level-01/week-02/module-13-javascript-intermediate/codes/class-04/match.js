const cpf = "060.278.291-09";

const regex = new RegExp("[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}");

console.log(cpf.match(regex));
