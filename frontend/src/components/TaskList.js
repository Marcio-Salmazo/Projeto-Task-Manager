import React, { useEffect, useState } from "react";
import api from "../services/api";
import { Button, ListGroup, Form } from "react-bootstrap";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  // Carrega tarefas ao iniciar o componente
  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const response = await api.get("tasks/");
    setTasks(response.data);
  };

  const toggleDone = async (task) => {
    await api.patch(`tasks/${task.id}/`, { done: !task.done });
    loadTasks();
  };

  const deleteTask = async (id) => {
    await api.delete(`tasks/${id}/`);
    loadTasks();
  };

  return (
    <ListGroup className="mt-3">
      {tasks.map((task) => (
        <ListGroup.Item
          key={task.id}
          variant={task.done ? "success" : ""}
          className="d-flex justify-content-between align-items-center"
        >
          <div>
            <Form.Check
              type="checkbox"
              checked={task.done}
              onChange={() => toggleDone(task)}
              label={task.title}
            />
          </div>
          <Button variant="danger" onClick={() => deleteTask(task.id)}>
            Excluir
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default TaskList;