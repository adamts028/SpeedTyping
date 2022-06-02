from django.contrib import admin
from django.urls import include, path

# registers the url directory for each app
urlpatterns = [
    path('base/', include('base.urls')),
    path('admin/', admin.site.urls),
    path('', include('base.urls')),

]
