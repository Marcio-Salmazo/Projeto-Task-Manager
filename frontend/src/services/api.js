/*
    Importação do Axios

        * O Axios é uma biblioteca JavaScript usada para fazer requisições HTTP (GET, POST, PATCH, DELETE, etc.).
        * Ele é usado em aplicações React para se comunicar com um servidor back-end (neste caso, seu servidor Django).

        * Pense nele como um "mensageiro" entre o front e o back:
            * Ele envia dados para o servidor.
            * Recebe respostas (como listas de tarefas, mensagens de erro, etc.).
*/

import axios from "axios";

/*
    Criação de uma instância Axios
        * Aqui você cria uma instância personalizada do Axios — chamada api — com uma configuração padrão:
            * baseURL: define o endereço base do servidor Django que a aplicação React vai acessar.

                - http://127.0.0.1:8000/ → é o endereço local (localhost) do Django quando você roda com python manage.py runserver.
                - /api/ → é o prefixo configurado nas URLs do back-end, geralmente em urls.py:

                    path("api/", include("tasks_app.urls")),

    Isso significa que, quando o React faz algo como: api.get("tasks/"); o Axios monta automaticamente a URL completa:
    'http://127.0.0.1:8000/api/tasks/' Sem precisar repetir o endereço toda vez.
*/
const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

/*
    Exportando a instância
        * Isso permite importar e usar essa configuração em qualquer componente React do projeto.
        * Em vez de importar axios diretamente e configurar o endereço em cada componente, basta importar api e usá-lo.

    Por exemplo, veja no TaskForm.js e TaskList.js:

            'import api from "../services/api";'

        Depois, o código pode simplesmente chamar:

            await api.post("tasks/", { title });
            await api.get("tasks/");
            await api.patch(`tasks/${task.id}/`, { done: !task.done });
            await api.delete(`tasks/${id}/`);
*/
export default api;