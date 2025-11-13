/*
Importações:

    * React — É o core da biblioteca.
    * useState — Hook usado para gerenciar estados internos do componente.
    * Bootstrap — Biblioteca de estilos CSS para facilitar o design.
    * react-bootstrap — Adapta os componentes do Bootstrap (como Container, Button, Form, etc.) para uso direto no React.
    * TaskForm — Componente filho que contém o formulário para adicionar novas tarefas.
    * TaskList — Componente filho que lista as tarefas existentes.
*/

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

/*
    Definindo o estado reload
        * reload é um estado booleano (inicialmente false).
        * Ele serve como um gatilho de atualização da lista de tarefas.
        * Sempre que o valor muda (true ↔ false), o React recria o componente
          TaskList (porque a prop key muda, forçando um novo render).
*/
function App() {
  const [reload, setReload] = useState(false);

  /*
    Função handleReload:
        * Essa função inverte o estado de reload.
        * É passada para o componente TaskForm através da prop onTaskCreated.
        * Quando uma nova tarefa é criada no TaskForm, ele chama onTaskCreated(), o que dispara handleReload().
        * Isso faz com que o TaskList seja recarregado, exibindo a tarefa recém-criada.

  */
  const handleReload = () => setReload(!reload);

  /*
    Estrutura visual (JSX)

        * Container — Um componente do react-bootstrap que centraliza o conteúdo com margens e padding padrões.
        * Título — Um h1 estilizado com classes do Bootstrap (text-center, mb-4) para centralizar e espaçar.

        * TaskForm

            * Recebe a função onTaskCreated como prop.
            * Quando o usuário cria uma nova tarefa, o formulário chama essa função → atualiza reload.

        TaskList

            * Recebe key={reload}. Isso é uma “técnica React” para forçar a remontagem do
              componente sempre que a chave muda.
            * Quando reload muda, TaskList é reconstruído e executa novamente o useEffect()
              dentro dele → recarrega as tarefas do backend.
  */
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Gerenciador de Tarefas 🧾</h1>
      <TaskForm onTaskCreated={handleReload} />
      <TaskList key={reload} />
    </Container>
  );
}

// Torna o componente App acessível para o arquivo index.js, que o renderiza na tela.
export default App;

/*
    🧩 Resumo do fluxo de dados

        * O usuário adiciona uma nova tarefa no TaskForm.
        * TaskForm envia um POST para a API e chama onTaskCreated().
        * App executa handleReload(), invertendo o valor de reload.
        * A mudança em reload altera a prop key de TaskList.
        * O React reconstrói TaskList, que então chama loadTasks() e exibe os dados atualizados.
*/