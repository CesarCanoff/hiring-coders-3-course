"use strict";
// Boolean
const isPerson = false;
// ==============================
// Number
const age = 18;
const height = 1.8;
// ==============================
// String
const fullName = "César Canoff";
// ==============================
// Array
const ages = [23, 14, 96, 55];
// ==============================
// Tuple - Three values
let players;
players = ["Canoff", "César", "Caio"];
// ==============================
// Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Reprovado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
// Recebe "APROVADO"
const statusDaAprovacao = StatusAprovacao.Aprovado;
// ==============================
// Any
const apiReturn = [123, "Bull", true];
const apiReturn_2 = {};
// ==============================
// Void
function printScreen(msg) {
    console.log(msg);
}
// ==============================
// Null e Undefined
const u = undefined;
const n = null;
// ==============================
// Object
function criar(obj) {
    // ...
}
criar({});
// ==============================
// Never
function infinityLoop() {
    while (true) { }
}
function error(msg) {
    throw new Error(msg);
}
function failed() {
    return error("FAILED!");
}
// ==============================
// Union Types
const nota = 5;
function showGrade(nota) {
    console.log(`A nota é: ${nota}`);
}
showGrade("10");
showGrade(10);
const employers = [
    {
        name: "César Canoff",
        age: 18,
        job: "Software Engineer at Microsoft",
    },
    {
        name: "Anna Rufus",
        age: 20,
        job: "Cloud Engineer at Google",
    },
];
function returnEmployers(employers) {
    for (let employer of employers) {
        console.log(`Name: ${employer.name}`);
    }
}
// ==============================
// ? Optional
let altura = 1.6;
altura = null;
const contato = {
    name: "César",
    phone1: "55555",
};
// Type Assertion
const myAge = 23;
myAge.toString();
// CERTIFICANDO QUE RETORNE UM INPUT.
const input = document.getElementById("numero_1");
// Row up <-> Row down
const input_2 = document.getElementById("numero_1");
console.log(input.value);
// ========================
