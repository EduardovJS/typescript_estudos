"use strict";
// Funções
// Retorna number
const sum1 = (x, y) => {
  return x + y;
};
sum1(1, 2);
// Retornar string, porém deve ser usado o toString
const sum2 = (x, y) => {
  return (x + y).toString();
};
sum2(1, 2);
// Retorna string ou number
const sum3 = (x, y) => {
  return x + y;
};
sum3(1, 2);
// Retorna um void
const log = (message) => {
  console.log(message);
};
