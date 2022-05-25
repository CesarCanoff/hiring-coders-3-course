/* TODAS AS FUNÇÕES RETORNAM UNDEFINED. */

// function a() {}
// function b() {}

function main() {
  // : void
  console.log("Running...");
  return [55, 456, 78];
}

main();

function neverReturnFunction(): never {
  while (true) {/* LOOPING */}
  throw new Error('Hello');
}

neverReturnFunction();