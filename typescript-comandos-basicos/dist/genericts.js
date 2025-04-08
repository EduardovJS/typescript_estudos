"use strict";
// Generics em TypeScript
// Generics é uma forma de criar componentes reutilizáveis que podem trabalhar com diferentes tipos de dados.
const returnValue = (value) => value;
const returnValue1 = (value) => value;
const message = returnValue("Hello World!");
const count = returnValue1(10);
function getFirstValueFromArray(array) {
    return array[0];
}
const firstValueFromNumberArray = getFirstValueFromArray([1, 2, 3]);
const firstValueFromStringArray = getFirstValueFromArray(["A", "AS"]);
// Promises
// Promise é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona
const minhaPromise = new Promise((resolve, rejeita) => {
    const sucesso = false;
    if (sucesso) {
        resolve("Tudo certo!");
    }
    else {
        rejeita("Algo deu errado.");
    }
});
minhaPromise
    .then((res) => console.log("Resposta:", res)) // Then quando a promise for resolvida
    .catch((err) => console.error("Erro:", err)); // Catch quando a promise for rejeitada
