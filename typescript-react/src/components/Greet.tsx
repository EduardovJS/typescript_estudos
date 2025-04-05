// Define o tipo da prop
type GreetProps = {
  name: string;
};
// Define o componente
export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h1>Esse é o componente Greet</h1>
      <p>Olá {props.name}</p>
    </div>
  );
};
