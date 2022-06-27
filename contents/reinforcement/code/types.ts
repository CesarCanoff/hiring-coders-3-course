// Boolean
const isPerson: boolean = false;
// ==============================

// Number
const age: number = 18;
const height: number = 1.8;
// ==============================

// String
const fullName: string = "César Canoff";
// ==============================

// Array
const ages: number[] = [23, 14, 96, 55];
// ==============================

// Tuple - Three values
let players: [string, string, string];
players = ["Canoff", "César", "Caio"];
// ==============================

// Enum
enum StatusAprovacao {
  Aprovado = "001",
  Pendente = "002",
  Reprovado = "003",
}

// Recebe "APROVADO"
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;
// ==============================

// Any
const apiReturn: any[] = [123, "Bull", true];
const apiReturn_2: any = {};
// ==============================

// Void
function printScreen(msg: string): void {
  console.log(msg);
}
// ==============================

// Null e Undefined
const u: undefined = undefined;
const n: null = null;
// ==============================

// Object
function criar(obj: object) {
  // ...
}

criar({});
// ==============================

// Never
function infinityLoop(): never {
  while (true) {}
}

function error(msg: string): never {
  throw new Error(msg);
}

function failed() {
  return error("FAILED!");
}
// ==============================

// Union Types
const nota: string | number = 5;
function showGrade(nota: number | string) {
  console.log(`A nota é: ${nota}`);
}

showGrade("10");
showGrade(10);
// ==============================
