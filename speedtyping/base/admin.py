from django.contrib import admin
from .models import Score, Text



# registers score in the admin database so admins can see/modify results
admin.site.register(Score)
admin.site.register(Text)
