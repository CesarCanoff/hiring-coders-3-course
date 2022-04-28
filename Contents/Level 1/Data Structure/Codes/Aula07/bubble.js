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
