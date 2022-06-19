from django.shortcuts import redirect, render
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.db.models import Q
from django.utils import timezone

from .models import Score
from .forms import RegisterForm
from django.utils.timezone import now
from datetime import datetime, timedelta, time, date

today = datetime.now().date()
weekly = today - timedelta(days=7)

# login view checks entered username and password against database and
# either logs you in or return error if something went wrong
def loginPage(request):
    page = 'login'
    if request.user.is_authenticated:
        return redirect('home')

    if request.method == 'POST':
        username = request.POST.get('username').lower()
        password = request.POST.get('password')

        try:
            user = User.objects.get(username=username)
        except:
            messages.error(request, 'User does not exist')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            messages.error(request, 'Username or password does not exist')

    context = {'page': page}
    return render(request, 'base/login_register.html', context)


# django logout function
def logoutUser(request):
    logout(request)
    return redirect('home')


# checks if account is already in database, and contain all necessary  and valid characters
# automatically logs you in when you successfully create an account
def registerPage(request):
    form = RegisterForm()

    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.username = user.username.lower()
            user.save()
            login(request, user)
            return redirect('home')
        else:
            messages.error(request, 'An error occurred during registration')

    return render(request, 'base/login_register.html', {'form': form})


# send user back to the home page...
def home(request):
    context = {}
    return render(request, 'base/home.html', context)


# collects and displays all scored save in the database
def scoreboard(request):
    scores = Score.objects.all()
    score_count = scores.count
    time=datetime.now()

    context = {'scores': scores, 'score_count': score_count,'time':time}
    return render(request, 'base/scoreboard.html', context)


def scoreboard_daily(request):

    scores = Score.objects.filter(created__gte=date.today())
    score_count = scores.count
    time=datetime.now()
    context = {'scores': scores, 'score_count': score_count,'time':time}
    return render(request, 'base/scoreboard_daily.html', context)


def scoreboard_weekly(request):


    scores = Score.objects.filter(created__gte=weekly)
    score_count = scores.count
    time=datetime.now()

    context = {'scores': scores, 'score_count': score_count,'time':time}
    return render(request, 'base/scoreboard_weekly.html', context)
