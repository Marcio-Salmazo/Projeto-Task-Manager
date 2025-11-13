from django.test import TestCase

# Create your tests here.
"""
    Arquivo vazio que existe por convenção, e o Django espera que estejam presentes 
    em cada aplicação criada (como tasks_app), pois fornecem pontos de extensão para 
    funcionalidades específicas.
    
    Esse arquivo é reservado para criar testes automatizados do Django — ou seja, 
    códigos que verificam se a aplicação está funcionando corretamente.
    Mesmo que esteja vazio agora, ele é essencial para boas práticas de desenvolvimento.
    
    Exemplo prático:
    class TaskModelTest(TestCase):
        def test_create_task(self):
            task = Task.objects.create(
                title="Estudar Django",
                description="Revisar views, serializers e models"
            )
            self.assertEqual(task.title, "Estudar Django")
            self.assertFalse(task.completed)
    
    Esse tipo de teste garante que o código do modelo Task funciona como esperado.
    Se houver algum erro na implementação, o teste falhará e mostrará a causa.
"""