// Tipos Básicos
let age: number = 5;

const teste: string = "Teste";

const isValid: boolean = true;

let idk: any = 5; // Pode ser qualquer coisa, sem tipagem estática
idk = "12";
idk = true;

// Listas
const ids: number[] = [1, 2, 3, 4, 5]; // Uma lista de numbers
const boolean: boolean[] = [true, false, true]; // Uma lista de boolean
const names: string[] = ["Teste", "teste"]; // Uma lista de string
const idks: any[] = ["teste", false, 1, 4]; // Uma lista de any

// Tupla
const perso: [number, string] = [1, "teste"]; // Devem seguir essa ordem na tupla

const people: [number, string][] = [
  // Pode ser feito uma lista de tupla
  [1, "Jane"],
  [2, "Jon"],
];

// Enum
enum Direction {
  Up = 1,
  Down = 2,
}
const direction = Direction.Up;
console.log(direction);

// Type Assertions
const productName: any = "Teste";
let itemId = productName as string;
let itemId1 = <string>productName;
