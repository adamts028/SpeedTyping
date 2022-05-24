
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('base/', include('base.urls')),
    path('admin/', admin.site.urls),
    path('', include('base.urls')),

]
