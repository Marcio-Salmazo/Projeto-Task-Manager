from django.db import models


# Esse é o coração do nosso sistema: estrutura dos dados no banco.
class Task(models.Model):
    title = models.CharField(max_length=200)  # Nome da tarefa
    description = models.TextField(blank=True, null=True)  # Descrição da tarefa
    completed = models.BooleanField(default=False)  # Flag para informar se foi concluído ou não
    created_at = models.DateTimeField(auto_now_add=True)  # Data automática de criação

    def __str__(self):
        return self.title
