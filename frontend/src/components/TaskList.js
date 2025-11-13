/*
    o TaskList.js é o componente responsável por exibir, atualizar e excluir tarefas no frontend.
    Ele é o espelho do estado atual do banco de dados: tudo o que o backend
    tem salvo é carregado aqui e mostrado em tempo real.
*/

/*
    Imports e configuração inicial
        * React, useState e useEffect são importados para criar o componente e gerenciar estados e efeitos colaterais.
        * api vem do arquivo src/services/api.js — é a ponte com o backend (uma instância do Axios).
        * Button, ListGroup e Form vêm do React-Bootstrap e servem para renderizar elementos com estilo moderno e responsivo.
*/
import React, { useEffect, useState } from "react";
import api from "../services/api";
import { Button, ListGroup, Form } from "react-bootstrap";

function TaskList() {

  /*
    Estado local
        * Cria um estado local tasks, que é uma lista (array) de objetos representando as tarefas.
        * setTasks é a função usada para atualizar o estado (por exemplo, após carregar, editar ou excluir tarefas).
        * Cada objeto da lista representa uma tarefa do backend, vinda do modelo Task do Django:

    {
      id: 1,
      title: "Estudar Django",
      description: "...",
      completed: false,
      created_at: "2025-11-13T07:50:00Z"
    }
  */
  const [tasks, setTasks] = useState([]);

  /*
    Carregamento inicial com useEffect
        * useEffect é um hook que executa ações após o componente ser renderizado.
        * Como o segundo parâmetro é um array vazio [], ele roda apenas uma vez, quando o componente é montado.
        * Aqui ele chama a função loadTasks() para buscar as tarefas no backend assim que o componente for carregado.
  */
  useEffect(() => {
    loadTasks();
  }, []);

  /*
    Função loadTasks: buscar tarefas
        * Faz uma requisição GET para o endpoint /api/tasks/.
        * O backend Django REST Framework (DRF) responde com uma lista de tarefas em JSON.
        * Essa resposta (response.data) é salva no estado tasks.

        Fluxo de requisição:
        Frontend → GET /api/tasks/ → Backend (Django) → Banco (SQLite/Postgres) → retorna JSON
  */

  const loadTasks = async () => {
    const response = await api.get("tasks/");
    setTasks(response.data);
  };

  /*
    Função toggleDone: marcar tarefa como concluída/não concluída
        * Envia uma requisição PATCH para /api/tasks/<id>/.
        * PATCH é usado para atualizar parcialmente um objeto (diferente de PUT, que substitui tudo).
        * Aqui ele tenta atualizar o campo done para o oposto do valor atual (!task.done).
        * Depois de atualizar, chama loadTasks() para recarregar a lista e exibir o novo estado.
  */
  const toggleDone = async (task) => {
    await api.patch(`tasks/${task.id}/`, { done: !task.done });
    loadTasks();
  };

  /*
    Função deleteTask: excluir tarefa
        * Envia uma requisição DELETE para /api/tasks/<id>/.
        * O Django REST Framework apaga a tarefa do banco de dados.
        * Depois, loadTasks() é chamado novamente para atualizar a lista exibida no frontend.
  */
  const deleteTask = async (id) => {
    await api.delete(`tasks/${id}/`);
    loadTasks();
  };

  /*
    Renderização (JSX)
        * Percorre o array tasks com map(), renderizando um <ListGroup.Item> para cada tarefa.
        * key={task.id} é obrigatório para React identificar cada item de forma única.
        * variant={task.done ? "success" : ""} muda a cor do item quando a tarefa está concluída.

        * O <Form.Check>:
            - Exibe um checkbox vinculado ao estado task.done.
            - O evento onChange chama toggleDone(task) para alternar o status.

        * O botão “Excluir” chama deleteTask(task.id) e remove a tarefa do banco.

        Assim, a interface é reativa:
            * Marca uma tarefa → envia PATCH → backend atualiza → frontend recarrega.
            * Exclui uma tarefa → envia DELETE → backend apaga → frontend recarrega.
  */
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