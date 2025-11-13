/*
    Esse arquivo index.js é o ponto de entrada principal do front-end React, ou seja, é o
    primeiro código executado quando o app inicia no navegador.
*/

/*
    Importações:
        * React — Necessário para usar JSX e componentes React.
        * ReactDOM — Responsável por renderizar os componentes React dentro do DOM HTML real do navegador.
        * ./index.css — Arquivo de estilo global (CSS) da aplicação, aplicado a todos os componentes.
        * App — O componente principal da aplicação (aquele que você explicou agora há pouco).
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/*
    Criando o ponto de montagem do React
        * Essa linha encontra o elemento HTML com id "root" dentro do arquivo public/index.html.
        (Normalmente, esse arquivo tem algo como <div id="root"></div>.)
        * ReactDOM.createRoot() cria o container React 18+, responsável por renderizar e
        atualizar o conteúdo React dentro desse <div>. Ou seja, é o elo entre o HTML
        estático e a aplicação React dinâmica.
*/

const root = ReactDOM.createRoot(document.getElementById('root'));

/*
    Renderizando o componente principal
        * Aqui o React efetivamente renderiza o componente App dentro do <div id="root">.
        * <React.StrictMode> é um wrapper opcional fornecido pelo React:

            * Ajuda a detectar possíveis problemas de boas práticas (por exemplo, funções duplicadas, hooks mal usados, código legado etc.).
            * Não afeta o funcionamento em produção, só serve como alerta em modo de desenvolvimento.

        * <App /> é o componente raiz, que contém o resto da aplicação — o formulário, a lista de tarefas etc.
*/
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
