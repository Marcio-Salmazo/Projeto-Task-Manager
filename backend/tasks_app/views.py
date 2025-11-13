from rest_framework import viewsets
from .models import Task
from .serializers import TaskSerializer

"""
    Esse arquivo define a view (ou controlador) responsável por gerenciar as requisições 
    HTTP (GET, POST, PUT, DELETE) relacionadas ao modelo Task.
    Ele faz parte do Django REST Framework (DRF), que estende o Django tradicional para criar APIs RESTful.
    
    Em termos simples:
    O views.py é quem recebe as requisições da API, acessa o banco de dados por meio do modelo Task, 
    formata a resposta com o TaskSerializer e envia o resultado ao cliente (por exemplo, o frontend).
"""

"""
    Cria a classe TaskViewSet, que herda de ModelViewSet. Esse é o componente central da API.
    A classe ModelViewSet já implementa automaticamente todas as operações CRUD (Create, Read, Update, Delete), 
    evitando a escrita de código extra.
"""


class TaskViewSet(viewsets.ModelViewSet):
    # Define quais objetos do banco de dados serão usados por essa view.
    # Task.objects.all() → seleciona todas as tarefas (SELECT * FROM tasks).
    # .order_by('-created_at') → ordena os resultados de forma decrescente pela data de criação.
    queryset = Task.objects.all().order_by('-created_at')  # Esse queryset é o ponto de conexão com o banco de dados.

    """
        Define qual classe de serialização será usada para converter os dados entre:
            * Objetos do modelo (Task)
            * Estrutura JSON que a API envia ou recebe
        O TaskSerializer cuida dessa tradução.
    """
    serializer_class = TaskSerializer
