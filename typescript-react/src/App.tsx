import React from "react";
import { Greet } from "./components/Greet";

const App: React.FC = () => {
  return (
    <div>
      <h1>Olá, mundo!</h1>
      <p>Bem-vindo ao seu aplicativo React com TypeScript.</p>
      <Greet name="Saudações" />
    </div>
  );
};

export default App;
