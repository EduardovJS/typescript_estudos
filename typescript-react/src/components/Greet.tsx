// Define o tipo da prop
type GreetProps = {
  name: string;
  count: number;
  IsLoggedIn: boolean;
};
// Define o componente
export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h1>Esse é o componente Greet</h1>
      <p>
        {props.IsLoggedIn
          ? `Olá ${props.name}, sua idade ${props.count}`
          : "Você não está logado"}
      </p>
    </div>
  );
};
