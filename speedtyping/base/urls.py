from django.urls import path
from . import views

# list of urls used in the views file to navigate through all the views
urlpatterns = [
    path('', views.home, name='home'),
    path('login/', views.loginPage, name='login'),
    path('logout/', views.logoutUser, name='logout'),
    path('register/', views.registerPage, name='register'),
    path('home/', views.home, name='home'),
    path('scoreboard/', views.scoreboard, name='scoreboard'),

]
