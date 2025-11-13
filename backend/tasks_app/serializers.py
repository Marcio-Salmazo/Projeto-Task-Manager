"""
    * rest_framework.serializers → vem do Django REST Framework (DRF) e contém todas as ferramentas que permitem
    converter objetos Python em formatos como JSON e vice-versa.

    .models import Task → importa o modelo Task definido anteriormente (no arquivo models.py),
    pois o serializer precisa conhecer a estrutura de dados que ele vai converter.
"""

from rest_framework import serializers
from .models import Task

"""
    Esse arquivo é o elo de ligação entre os dados do banco de dados e o formato JSON que trafega pela API.
    É o responsável por converter objetos Python (como instâncias do modelo Task) em dados JSON, e também o inverso — 
    converter JSON recebido do frontend em objetos Python prontos para serem salvos no banco.
"""

"""
   A classe TaskSerializer herda de serializers.ModelSerializer.  o ModelSerializer é uma classe especial do DRF 
   que automatiza o processo de serialização com base no modelo Django.
   
   Com isso, ao invés de definir manualmente cada campo que vai para o JSON, 
   ele lê o modelo Task e gera isso automaticamente.
"""


class TaskSerializer(serializers.ModelSerializer):
    """
        Dentro da classe TaskSerializer, declaramos uma classe interna Meta.
        Essa estrutura é usada no Django e DRF para definir configurações adicionais sobre
        o comportamento da classe principal.
    """

    class Meta:
        # Neste caso, o Task, que representa a tabela de tarefas no banco.
        model = Task  # Diz ao serializer qual modelo Django ele deve usar como base.
        fields = '__all__'  # Diz ao serializer para incluir todos os campos do modelo
        # Se quiséssemos incluir apenas alguns campos, poderíamos escrever, por exemplo: fields = ['title', 'completed']
