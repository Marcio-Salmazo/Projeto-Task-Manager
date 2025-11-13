/*
    * Importa o React e o hook useState.
    * useState permite que o componente tenha estado interno (a string title que o usuário digita).
*/
import React, { useState } from "react";
/*
    * Importa um cliente HTTP (uma instância do Axios) configurada em src/services/api.js.
    * Esse api contém a baseURL (http://127.0.0.1:8000/api/ no exemplo) e métodos como api.post, api.get, etc.
    * Aqui ele é usado para enviar a requisição POST que cria uma nova tarefa no backend Django.
*/
import api from "../services/api";
/*
    * Importa componentes estilizados do React-Bootstrap: Form e Button.
    * Eles fornecem estilos e comportamento prontos (acessibilidade básica, classes CSS, etc).
*/
import { Button, Form } from "react-bootstrap";

/*
    * Define o componente funcional TaskForm.
    * Recebe uma prop chamada onTaskCreated — função que o componente pai
      (por exemplo App.js) passa para atualizar a lista de tarefas após uma criação bem-sucedida.
    * Isso cria desacoplamento: o TaskForm só cuida de criar; quem cuida de recarregar a lista é o pai.
*/
function TaskForm({ onTaskCreated }) {

  /*
    * Declara um estado local 'title' inicializado como string vazia.
    * 'title' armazena o valor atual do campo de entrada.
    * 'setTitle' é a função que atualiza esse estado.
    * Esse é um controlled input: o valor exibido no <Form.Control> é o valor do estado React.
  */
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => { // Função assíncrona que responde ao evento de submit do formulário.
    e.preventDefault(); // Evita o comportamento padrão do formulário (recarregar a página).

    // Envia uma requisição POST para o endpoint /api/tasks/ com o payload { title: "..." }.
    // O DRF no backend recebe, valida e cria um novo registro Task no banco.
    await api.post("tasks/", { title });
    setTitle(""); // limpa o campo de entrada ao finalizar o envio.

    // notifica o componente pai para atualizar a lista (normalmente este pai
    // invertendo o estado reload ou chamando loadTasks()).
    onTaskCreated();
  };

  /*
    * <Form onSubmit={handleSubmit}> — o evento de submit do formulário dispara handleSubmit.
    * <Form.Control ... value={title} onChange={...} /> — controlled input:
    * value={title} garante que o valor exibido vem do estado title.
    * onChange={(e) => setTitle(e.target.value)} atualiza o estado sempre que o usuário digita.
    * required — atributo HTML que impede submissão se o campo estiver vazio (validação no cliente).
    * <Button type="submit"> — botão que dispara o evento submit.
  */
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

/*
    Como a conexão com o backend funciona aqui:

        * api.post("tasks/", { title }) junta a baseURL do api com "tasks/" e envia um POST
          com { title } como corpo JSON.
        * O Django REST Framework (backend) recebe a requisição em TaskViewSet.create(),
          passa pelos TaskSerializer para validação e chama Task.objects.create(...).
        * O banco salva o registro (via ORM) e o backend retorna a representação da nova tarefa em JSON.
        * TaskForm (no frontend) não utiliza a resposta retornada diretamente;
          ele simplesmente limpa o campo e chama onTaskCreated() para disparar o reload da lista em TaskList.
*/