// Generics em TypeScript
// Generics é uma forma de criar componentes reutilizáveis que podem trabalhar com diferentes tipos de dados.

const returnValue = <T>(value: any) => value;
const returnValue1 = <T>(value: T): T => value;

const message = returnValue<string>("Hello World!");
const count = returnValue1<number>(10);

function getFirstValueFromArray<T>(array: T[]) {
  return array[0];
}

const firstValueFromNumberArray = getFirstValueFromArray<Number>([1, 2, 3]);
const firstValueFromStringArray = getFirstValueFromArray(["A", "AS"]);

// Promises
const minhaPromise = new Promise<string>((resolve, rejeita) => {
  const sucesso = false;

  if (sucesso) {
    resolve("Tudo certo!");
  } else {
    rejeita("Algo deu errado.");
  }
});

minhaPromise
  .then((res) => console.log("Resposta:", res)) // Then quando a promise for resolvida
  .catch((err) => console.error("Erro:", err)); // Catch quando a promise for rejeitada
