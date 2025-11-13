from django.contrib import admin

# Register your models here.
"""
    Arquivo vazio que existe por convenção, e o Django espera que estejam presentes 
    em cada aplicação criada (como tasks_app), pois fornecem pontos de extensão para 
    funcionalidades específicas.
    
    Esse arquivo serve para registrar seus modelos no painel administrativo do Django, conhecido como Django Admin.
    Com ele, você pode visualizar, criar, editar e excluir registros diretamente pela interface web, 
    sem precisar mexer no banco de dados manualmente.
    
    Quando criamos um modelo no models.py (como o Task), o Django não o exibe automaticamente no painel /admin.
    Para isso, é necessário registrá-lo no admin.py. Se o arquivo está vazio, significa que o modelo Task 
    ainda não aparece no painel administrativo.
    
    # Exemplo prático:
    # Registrar o modelo Task no painel administrativo
    @admin.register(Task)
    class TaskAdmin(admin.ModelAdmin):
        list_display = ('title', 'completed', 'created_at')
        list_filter = ('completed',)
        search_fields = ('title', 'description')
"""