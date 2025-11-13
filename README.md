# 🧩 Projeto Task-Manager (Django + React + PostgreSQL + Docker)

O repositório contém os arquivos referente ao projeto básico de gerenciamento de atividades. O sistema foi desenvolvido para aprofundar os conhecimentos acerca do desenvolvimento full-stack, utilizando a integração entre o *Django REST Framework (backend)* para o back-end e o *React* para o frontend. Adicionalmente, também foi utilizado o *PostgreSQL* como banco de dados (via Docker).  

Este projeto foi criado com o objetivo de:
- Consolidar conhecimentos em desenvolvimento *Full Stack*;
- Exercitar o padrão *MVC (Model–View–Controller)*;
- Aplicar práticas reais de *integração entre frontend e backend*;
- Preparar um *portfólio profissional* para futuras oportunidades de trabalho.

![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)

## Dados pessoais
**Nome:** Marcio Salmazo Ramos \
**Redes sociais e contato:**

| [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/marcio-ramos-b94669235) | [![Instagram](https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/marcio.salmazo) | [![Gmail](https://img.shields.io/badge/Gmail-333333?style=for-the-badge&logo=gmail&logoColor=red)](mailto:contato.marcio.salmazo19@gmail.com) | [![GitHub](https://img.shields.io/badge/GitHub-0077B5?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Marcio-Salmazo) |
|---|---|---|---|

## Conceitos Envolvidos

| Conceito | Descrição |
|-----------|------------|
| **MVC (Model–View–Controller)** | Organização da aplicação em camadas lógicas e independentes. |
| **Django REST Framework** | Criação e consumo de APIs RESTful de forma rápida e segura. |
| **React** | Construção de interfaces reativas e dinâmicas com componentes reutilizáveis. |
| **PostgreSQL** | Banco de dados relacional (executado em ambiente isolado). |
|**Docker** | Plataforma voltada à construção, empacotamento e execução de aplicações em contêineres.|
| **Integração Frontend–Backend** | Comunicação via API (requisições HTTP usando `fetch`). |

---

## Tecnologias Utilizadas

| Camada | Tecnologias |
|--------|--------------|
| **Frontend** | React, HTML5, CSS3, JavaScript (ES6+) |
| **Backend** | Python, Django REST Framework |
| **Banco de Dados** | PostgreSQL (via Docker) |
| **Ferramentas** | Git, Node.js, npm, Docker, PyCharm |

---

## ⚙️ Estrutura do Projeto

Projeto-Task-Manager/\
│\
├── .idea/\
│\
├── backend/\
│\
│ ├── manage.py\
│ ├── db.sqlite3\
│ │\
│ ├── backend/\
│ │ ├── \_\_init\_\_.py\
│ │ ├── settings.py\
│ │ ├── ...\
│ │ └── \_\_pycache\_\_/\
│ │\
│ ├── tasks_app\
│ │ ├── models.py # Modelos (Camada Model - M)\
│ │ ├── views.py # Lógica de controle (Controller - C)\
│ │ ├── serializers.py # Serialização de dados (API REST)\
│ │ ├── urls.py # Rotas específicas da app\
│ │ └── ...\
│\
├── frontend/\
│\
│ ├── src\
│ │ ├── components/ # Componentes visuais (Camada View - V)\
│ │ ├── App.js\
│ │ ├── index.js\
│ │ └── ...\
│ └── package.json\
│\
├── venv/\
│\
├── docker-compose.yml\
│\
├── requirements.txt\
│\
└── README.md\

OBSERVAÇÃO: As funcionalidades dos arquivos mais relevantes serão descritas abaixo:

---

## Descrição dos principais arquivos da estrutura

* Diretório 'backend' →
* Diretório 'frontend' →
* Arquivo docker-compose.yml →
* Arquivo requirements.txt →


---

## Instalações necessárias

* **Python 3.9+**:  
    * Abra o terminal (ou o console dentro do PyCharm) e digite ***python --version*** para verificar se já existe alguma versão do python instalada;
    * Caso o python não esteja instalado, basta fazer o dowload por meio do link *https://www.python.org/downloads/* e a seguinte instalação; 
    * Durante a instalação, marque a opção ***“Add Python to PATH”***.

* **Docker Desktop**:
    * O Docker vai permitir que você rode o PostgreSQL facilmente, sem precisar instalar o banco direto no seu sistema. Para o windows, é possível fazer o download pelo link: *https://www.docker.com/products/docker-desktop/*
    * Após a instalação, é possível verificar se está tudo operando normalmente por meio do comando ***docker --version***
    * Caso o Docker reclame, é importante habilitar wsl 2, para isso, basta executar no PowerShell como administrador os comandos ***wsl --install*** e ***wsl --set-default-version 2***

* **Node.JS + npm:**
    * O node é necessário para a implementação do React, o download de seu instalador pode ser feito por meio do link: *https://nodejs.org/*
    * Após a instalação, é possível verificar se está tudo operando normalmente por meio dos comandos ***nove -v*** e ***npm -v***

---

## Passo-a-Passo para execução no Windows

### 1️⃣ Clonar o repositório

git clone https://github.com/Marcio-Salmazo/Projeto-Task-Manager \

### 2️⃣ (Opcional) Rodar o PostgreSQL via Docker

Se desejar usar o PostgreSQL, abra o aplicativo Docker Desktop e execute o comando
***docker run --name taskdb -e POSTGRES_PASSWORD=1234 -p 5432:5432 -d postgres*** no terminal do Windows (PowerShell ou CMD), na raiz do projeto — ou seja, dentro da pasta principal que contém o arquivo docker-compose.yml.

Atualize o ***settings.py***:

    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': 'postgres',
            'USER': 'postgres',
            'PASSWORD': '1234',
            'HOST': 'localhost',
            'PORT': '5432',
        }
    }

***OBSERVAÇÃO:*** O arquivo ***settings.py*** já possui essa estrutura definida. Para utilizar sem o ***postgres*** é necessário comentar o trecho anterior e descomentar o seguinte trecho (nesse caso, não é necessário subir o docker):

    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }


### 3️⃣ Criar e ativar o ambiente virtual

Caso a pasta ***venv*** não esteja presente, ela pode ser criada por meio do comando ***python -m venv venv***.\
Com a pasta ***venv*** criada, o usuário preciso ativá-la, para isso basta abrir o terminal (powershell) na pasta raíz do projeto (onde a pasta venv) está localizada e executar o seguinte comando: ***.\venv\Scripts\Activate.ps1***

O resultado deve ser algo como: ***(venv) PS C:\Users\yout_user\path\Projeto-Task-Manager\>***

### 4️⃣ Instalar as dependências do backend

Ainda com o terminal aberto na pasta raíz do projeto, o usuário pode inserir o seguinte código para instalar as dependências necessárias para a execução do programa: ***pip install -r requirements.txt***

### 5️⃣ Aplicar as migrações e iniciar o servidor

Essa etapa deve ser executada na pasta ***backend*** - onde está localizado o arquivo ***manage.py*** - O usuário deve abrir esse diretório na aba do terminal que está com a ***venv*** ativada e executar os seguintes comandos:
* python manage.py migrate
* python manage.py runserver
O backend estará rodando em:
👉 http://127.0.0.1:8000/api/tasks/

### 6️⃣ Configurar e rodar o frontend

Abra outro terminal na pasta ***frontend*** e execute os seguintes comandos:
* npm install
* npm start
O frontend abrirá automaticamente em:
👉 http://localhost:3000

## Funcionalidades Implementadas

|Funcionalidade|Status| 
|---|---|
|Criar tarefas|	✅|
|Listar tarefas|	✅|
|Atualizar status (concluída/não concluída)| 	✅|
|Excluir tarefas|	✅|
Integração com API Django|	✅|
|Banco de dados Docker/PostgreSQL|	🔄 Opcional|
|Autenticação de usuários|	🔜 Planejado|
|Pipeline com Jenkins|	🔜 Planejado|

### 💡 Lições e Conceitos Práticos
* Organização de código no padrão MVC
* Consumo de APIs REST no React
* Manipulação de estado e ciclo de vida com React Hooks
* Integração entre camadas via fetch API
* Uso de Docker para isolamento do banco de dados
* Configuração de ambiente Full Stack profissional

### 🧭 Próximos Passos
 * Adicionar autenticação JWT (login/logout)
 * Implementar testes automatizados (pytest e Jest)

## Observações relevantes
* O codigo será detalhadamente comentado de maneira didática para explicitar as funcionalidades Implementadas, bem como facilitar a compreensão das tecnologias utilizadas (seus conceitos e como elas foram implementadas).
