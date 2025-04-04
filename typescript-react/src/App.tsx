import "./App.css";
import AddTasks from "./components/AddTasks.tsx";
import Tasks from "./components/Tasks.tsx";

function App() {
  return (
    <>
      <h1>Gerenciador de Tarefas</h1>
      <AddTasks />
      <Tasks />
    </>
  );
}

export default App;
