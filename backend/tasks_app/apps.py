from django.apps import AppConfig

"""
    Esse algoritmo é responsável por configurar e registrar a aplicação dentro do ecossistema do projeto Django.
    Serve para que o Django reconheça e configure a aplicação tasks_app como parte do projeto maior (backend).
    É é criado automaticamente quando usamos o comando: python manage.py startapp tasks_app
"""

"""
    Cria uma subclasse de AppConfig, chamada TasksAppConfig.
    Essa classe contém informações que dizem ao Django como inicializar e gerenciar o app.
    Por convenção, o nome dessa classe segue o padrão: <NomeDaApp>Config
"""


class TasksAppConfig(AppConfig):
    """
        Essa linha define o tipo padrão de campo de chave primária (ID) para os modelos criados dentro desse app.
        Em versões mais antigas do Django, o campo padrão era AutoField (inteiro de 32 bits).
        A partir das versões recentes (Django 3.2+), recomenda-se usar BigAutoField (inteiro de 64 bits).
    """
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'tasks_app'  # Define o nome completo do aplicativo (como ele deve ser referenciado dentro do projeto).
