// Type
//  Pode ser ultilizado tudo menos void, pis void é para funções
type Order = {
  id: number;
  name: string;
  price: number;
};

type User = {
  firstName: string;
  vetor: number[];
  passaword?: string;
  email?: string; // ? significa que é opcional
  orders: Order[]; // Array de orders
};

const user: User = {
  firstName: "Eduardo",
  vetor: [1, 2, 3],
  orders: [
    { id: 1, name: "Produto 1", price: 10.0 },
    { id: 2, name: "Produto 2", price: 20.0 },
  ],
};

const printlog = (message?: string) => {}; // Função deve conter um parâmetro opcional, caso seu retorno seja opcional como o email
printlog(user.email);
printlog(user.passaword!); // Ignora o undefined, o ! significa que não é undefined, ou seja, é obrigatório

// Unions
type Author = {
  books: string[];
};
// Funciona como se fosse uma herança
const author: Author & User = {
  books: ["Livro 1", "Livro 2"],
  firstName: "Eduardo",
  vetor: [1, 2, 3],
  orders: [{ id: 1, name: "Produto 1", price: 10.0 }],
};

// Interfaces
// Voce consegue usar readonly e usar unions com interfaces
interface UserInterface {
  readonly firstName: string;
  email: string;
}

const emailUser: UserInterface = {
  email: "teste@gmail",
  firstName: "teste",
};
