import React, { useState } from "react";
import api from "../services/api";
import { Button, Form } from "react-bootstrap";

function TaskForm({ onTaskCreated }) {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("tasks/", { title });
    setTitle("");
    onTaskCreated();
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-3">
      <Form.Group className="mb-3" controlId="formTaskTitle">
        <Form.Control
          type="text"
          placeholder="Nova tarefa..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Form.Group>
      <Button type="submit" variant="primary">
        Adicionar
      </Button>
    </Form>
  );
}

export default TaskForm;