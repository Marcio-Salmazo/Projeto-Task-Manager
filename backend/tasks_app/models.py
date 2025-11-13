"""
    O arquivo models.py é o coração da aplicação Django, pois ele define a estrutura dos
    dados que serão armazenados no banco de dados. É nele que criamos as classes que
    representam as tabelas e seus atributos (colunas).

    O módulo models do Django, contém todas as classes e tipos de campos usados para criar modelos de banco de dados.
    Tudo o que vem de models (como CharField, TextField, DateTimeField, etc.) são tipos de colunas
    que o Django traduz para a linguagem do banco de dados (PostgreSQL, SQLite, etc.).
"""

from django.db import models

"""
    Aqui é definida uma classe Python chamada Task, que herda de models.Model.
    Essa herança é o que transforma essa classe em um modelo Django, permitindo que ela seja convertida 
    automaticamente em uma tabela no banco de dados chamada tasks_app_task (por convenção: nome_do_app_nome_do_model).
    * Cada atributo da classe Task se torna uma coluna na tabela.
"""


class Task(models.Model):
    title = models.CharField(max_length=200)  # Nome da tarefa
    description = models.TextField(blank=True, null=True)  # Descrição da tarefa
    completed = models.BooleanField(default=False)  # Flag para informar se foi concluído ou não
    created_at = models.DateTimeField(auto_now_add=True)  # Data automática de criação

    """
        Este método define como o objeto Task será exibido como texto (por exemplo, no painel administrativo do Django).
        Quando as tarefas forem listadas no admin, o Django vai exibir apenas o título da tarefa, 
        ao invés de algo genérico como <Task: Task object (1)>.
        
        Em termos conceituais essa classe Task é um modelo de dados (model) que define a estrutura 
        e o comportamento de uma tabela de tarefas. Cada instância da classe representa uma linha da tabela.
    """

    def __str__(self):
        return self.title


"""
    Quando rodamos os comandos:
        python manage.py makemigrations
        python manage.py migrate
    O Django converte automaticamente essa definição em comandos SQL, 
    criando a tabela correspondente no banco (no caso, PostgreSQL).
    
    -----------
    
    * Quando uma nova tarefa no frontend é criada, ela é enviada pela API para
      o ViewSet (em views.py), que recebe a requisição.
    * O Serializer (em serializers.py) transforma o JSON recebido em um objeto Task.
    * O Django salva esse objeto no banco usando o ORM:
    * Em sequência, essa tarefa pode ser recuperada, listada, atualizada ou excluída via endpoints REST.
"""
