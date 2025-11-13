"""
O arquivo backend/urls.py é o mapeamento central de URLs do projeto Django.
Ele indica:
    1 - quais caminhos (como /admin/ ou /api/tasks/) existem,
    2 - qual view (função ou classe que responde à requisição) deve ser executada para cada um.
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from tasks_app.views import TaskViewSet
"""
    * django.contrib.admin → importa o painel administrativo padrão do Django.
    * path e include → funções usadas para definir rotas.
        1 - path() cria rotas individuais.   
        2 - include() permite incluir outras configurações de URL (por exemplo, de outros apps).
    * routers → vem do Django REST Framework (DRF), e é responsável por gerar automaticamente 
      rotas para APIs baseadas em ViewSets.   
    * TaskViewSet → é a view principal da aplicação tasks_app (onde estão as regras da API para lidar com tarefas).
"""

"""
    DefaultRouter() → cria um roteador que gera automaticamente as rotas REST para um conjunto de views (os ViewSets).
    router.register(r'tasks', TaskViewSet) → registra o endpoint /tasks/ e vincula-o ao TaskViewSet (O qual está
    localizado em view.py no diretório 'frontend').
    Em outras palavras, esse trecho cria, URLs como:
        * GET /api/tasks/ → lista todas as tarefas.
        * POST /api/tasks/ → cria uma nova tarefa.
        * GET /api/tasks/{id}/ → obtém uma tarefa específica.
        * PUT /api/tasks/{id}/ → atualiza uma tarefa.
        * DELETE /api/tasks/{id}/ → exclui uma tarefa.
        
        Tudo isso sem precisar escrever manualmente cada rota.
"""
router = routers.DefaultRouter()
router.register(r'tasks', TaskViewSet)

"""
    path('admin/', admin.site.urls) → cria o caminho padrão do painel administrativo (http://localhost:8000/admin/).
    path('api/', include(router.urls)) → todas as rotas geradas pelo router (como /tasks/) 
                                         ficam acessíveis sob o prefixo /api/.
"""
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
