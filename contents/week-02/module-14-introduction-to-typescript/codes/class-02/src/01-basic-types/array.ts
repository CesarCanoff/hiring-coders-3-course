const cats: string[] = ["Qwerty", "Eros"];

cats.push('Yeat')

function returnCatsName(cats: string[]) {
  return `The cats names are: ${cats.join(', ')}`;
}

console.log(returnCatsName(['Kert', 'Rulis', 'Y0da']));