import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [reload, setReload] = useState(false);

  const handleReload = () => setReload(!reload);

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Gerenciador de Tarefas 🧾</h1>
      <TaskForm onTaskCreated={handleReload} />
      <TaskList key={reload} />
    </Container>
  );
}

export default App;