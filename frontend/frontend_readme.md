# Estrutura base do front-end

### 1. node_modules/

Essa é a pasta onde ficam todas as dependências instaladas pelo NPM (Node Package Manager).
Quando você roda npm install, o React baixa todas as bibliotecas definidas em package.json e as coloca aqui.
Por exemplo: React, ReactDOM, Axios (para chamadas HTTP), e ferramentas de build como Webpack.

**Resumo:** É o “repositório local” de todas as bibliotecas que o projeto React usa.

### 2. public/

Contém arquivos estáticos acessíveis diretamente pelo navegador, como o HTML base e ícones.
O mais importante aqui é o index.html, que é o ponto de entrada do app React no navegador.
Ele tem uma div com id="root" — e é nela que o React “monta” toda a aplicação.

**Resumo:** Guarda os arquivos estáticos da aplicação — e o index.html é o ponto de partida visual.

### 3. src/

Aqui mora todo o código-fonte real da aplicação React.
É o coração do frontend — onde o React cria, exibe e manipula os componentes.
Dentro dela temos duas subpastas principais: components/ e services/

* ***components/ -***  Essa pasta guarda os componentes React — que são as “peças” visuais reutilizáveis do sistema.
Cada um é um bloco de interface, como um formulário, uma lista, um botão, etc. No caso desta aplicação temos 
***TaskForm.js*** voltado para a criação e edição de tarefas e o ***TaskList.js*** voltado para a listagem das tarefas vindas da API.


* ***services/ -*** Contém os arquivos que fazem a integração entre o frontend e o backend.
No caso deste projeto: ***api.js***  configura o cliente HTTP (Axios) e define o endpoint 
da API Django (http://localhost:8000/api/tasks/).\
Esse arquivo é a ponte entre o React e o Django REST Framework — toda vez que o usuário cria, edita ou deleta uma tarefa, é esse módulo que envia as requisições HTTP (GET, POST, PUT, DELETE) para o backend.

Dentro do diretório src/ também existem os Arquivos principais (App.js, App.css, index.js, index.css):

| Arquivo   | Função                                                                                                                           |
|-----------|----------------------------------------------------------------------------------------------------------------------------------|
| App.js	   | Componente principal da aplicação. Ele combina o TaskForm e o TaskList em uma única tela e gerencia o estado global das tarefas. |
| App.css   | Define o estilo visual da aplicação (cores, espaçamento, fontes etc.).                                                           |
| index.js  | É o ponto de entrada do React — é aqui que o componente App é “montado” dentro da div id="root" do index.html.                   |
| index.css | Define estilos globais aplicados em toda a aplicação.                                                                            |

### 4. .gitignore

Define quais arquivos o Git deve ignorar (como node_modules/, arquivos temporários, caches, etc.).
Evita subir conteúdo pesado ou gerado automaticamente para o repositório.

### 5. frontend_readme.md

Documento de apoio criado para explicar como rodar, testar e entender o frontend.
É útil para documentação técnica ou compartilhamento em portfólio.

### 6. package.json

O arquivo mais importante do projeto React, sendo responsável por armazenar:
* Nome do projeto;
* Versão;
* Scripts de inicialização (npm start, npm build);
* Dependências (bibliotecas usadas);
* Informações de build.

É o “manifesto” do projeto React — define o que ele precisa para funcionar.

### 7. package-lock.json

É um arquivo gerado automaticamente pelo NPM que trava as versões exatas das dependências usadas.
Garante que todos que rodarem o projeto usem as mesmas versões de bibliotecas.

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
