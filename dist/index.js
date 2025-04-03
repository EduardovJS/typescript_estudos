"use strict";
// Tipos Básicos
let age = 5;
const teste = "Teste";
const isValid = true;
let idk = 5; // Pode ser qualquer coisa, sem tipagem estática
idk = "12";
idk = true;
// Listas
const ids = [1, 2, 3, 4, 5]; // Uma lista de numbers
const boolean = [true, false, true]; // Uma lista de boolean
const names = ["Teste", "teste"]; // Uma lista de string
const idks = ["teste", false, 1, 4]; // Uma lista de any
// Tupla
const perso = [1, "teste"]; // Devem seguir essa ordem na tupla
const people = [
  // Pode ser feito uma lista de tupla
  [1, "Jane"],
  [2, "Jon"],
];
// Enum
var Direction;
(function (Direction) {
  Direction[(Direction["Up"] = 1)] = "Up";
  Direction[(Direction["Down"] = 2)] = "Down";
})(Direction || (Direction = {}));
const direction = Direction.Up;
