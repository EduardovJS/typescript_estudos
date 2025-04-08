import React from "react";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersoList } from "./components/PersonList";

const App: React.FC = () => {
  const persoNames = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];

  return (
    <div>
      <h1>Olá, mundo!</h1>
      <p>Bem-vindo ao seu aplicativo React com TypeScript.</p>
      <Greet name="Saudações" count={20} IsLoggedIn={false} />
      <Person name={persoNames} />
      <PersoList names={nameList} />
    </div>
  );
};

export default App;
