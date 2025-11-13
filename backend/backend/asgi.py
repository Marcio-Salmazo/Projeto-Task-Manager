"""
    ASGI config for backend project.
    It exposes the ASGI callable as a module-level variable named ``application``.

    Usuário → Servidor web → (WSGI/ASGI) → Django (views, models, etc.)
"""
import os
from django.core.asgi import get_asgi_application
"""
    Os arquivos — wsgi.py e asgi.py — são responsáveis por conectar o projeto Django ao servidor web.
    Eles fazem o papel de “ponte” entre o servidor (que lida com as requisições HTTP reais) 
    e o framework Django (que processa e responde essas requisições).

    Embora o código pareça igual, eles servem a propósitos diferentes:
        * wsgi.py é usado em aplicações síncronas (tradicionais).
        * asgi.py é usado em aplicações assíncronas (modernas, com WebSockets e requisições simultâneas).
"""

"""
    Define a variável de ambiente DJANGO_SETTINGS_MODULE, informando ao Django qual arquivo de 
    configurações deve ser usado — neste caso, backend/settings.py.
    
    Em outras palavras, isso garante que, quando o servidor iniciar, o Django saiba onde estão as 
    configurações do banco de dados, apps instalados, middlewares, etc.
"""
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')


"""
    Cria o objeto application, que é a porta de entrada da aplicação Django.
    Esse objeto é o que o servidor web executa a cada requisição HTTP recebida, ou seja, 
    ele é a interface entre o servidor e o Django.
"""
application = get_asgi_application()
