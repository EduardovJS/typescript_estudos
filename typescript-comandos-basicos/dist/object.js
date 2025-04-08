"use strict";
const user = {
    firstName: "Eduardo",
    vetor: [1, 2, 3],
    orders: [
        { id: 1, name: "Produto 1", price: 10.0 },
        { id: 2, name: "Produto 2", price: 20.0 },
    ],
};
const printlog = (message) => { }; // Função deve conter um parâmetro opcional, caso seu retorno seja opcional como o email
printlog(user.email);
printlog(user.passaword); // Ignora o undefined, o ! significa que não é undefined, ou seja, é obrigatório
// Funciona como se fosse uma herança
const author = {
    books: ["Livro 1", "Livro 2"],
    firstName: "Eduardo",
    vetor: [1, 2, 3],
    orders: [{ id: 1, name: "Produto 1", price: 10.0 }],
};
const emailUser = {
    email: "teste@gmail",
    firstName: "teste",
};
