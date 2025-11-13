import os
import sys
"""
    Lógica geral do manage.py (resumida)
    
        1. Define qual arquivo de configuração o Django deve usar (variável DJANGO_SETTINGS_MODULE).
        2. Importa a função que interpreta e executa comandos administrativos do Django 
           (execute_from_command_line).
        3. Passa os argumentos do terminal para essa função, permitindo controlar o servidor de desenvolvimento, 
           criar migrações, rodar testes etc.
        4. Fornece mensagens amigáveis caso o Django não esteja disponível no ambiente atual —
           por exemplo, quando o venv não está ativo.
"""

"""
    linha de intérprete usada em sistemas Unix-like, utilizada quando tornamos
    o arquivo executável (por exemplo chmod +x manage.py) e o executa diretamente
    (./manage.py), o kernel usa essa linha para saber qual intérprete executar
    (a versão de python no PATH).
"""
# !/usr/bin/env python

"""
    Definição da função principal que agrupa o comportamento do script.
    Descreve o propósito de executar tarefas administrativas do Django (migrations, runserver, createsuperuser, etc).
    
    OBSERVAÇÃO: Migrations no Django são um sistema que sincroniza as alterações feitas nos modelos Python 
    com a estrutura do seu banco de dados. Elas registram as modificações, como adicionar um campo ou um novo modelo, 
    em arquivos de migração e, em seguida, aplicam essas alterações ao banco de dados usando os comandos 
    makemigrations e migrate. Isso permite que você gerencie a evolução do seu banco de dados sem ter 
    que escrever SQL manualmente. 
"""


def main():
    """
    Define a variável de ambiente DJANGO_SETTINGS_MODULE para 'backend.settings'
    somente se ela ainda não estiver definida. Essa linha é importante por demonstrar ao Django
    qual módulo de configurações usar (o arquivo settings.py).
    Essa variável informa ao Django algo como: “use o módulo backend.settings”.
    """
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
    try:
        """
            Tenta importar a função execute_from_command_line do pacote do Django para integrar o sistema de management 
            commands do Django. Ela interpreta sys.argv (por exemplo runserver, makemigrations, migrate) e 
            executa o comando correspondente.
        """
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc

    """
       Chama a engine de comandos do Django, passando os argumentos de linha de comando.
       sys.argv é uma lista onde:
            * sys.argv[0] é o nome do script (manage.py),
            * sys.argv[1:] são os argumentos que você passa (por exemplo runserver 0.0.0.0:8000, 
              migrate, createsuperuser, test, etc).
            * O que internamente ocorre: o Django analisa o comando (por exemplo runserver) e executa a sequência 
              necessária — configurar o ambiente, carregar settings, inicializar apps, e rodar o comando especificado.
    """
    execute_from_command_line(sys.argv)


"""
    verifica se o script está sendo executado diretamente (não importado como módulo). 
    Quando python manage.py é executado ..., esse if é verdadeiro, então main() é chamado.
"""

if __name__ == '__main__':
    main()
