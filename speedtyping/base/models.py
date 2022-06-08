from django.db import models
from django.contrib.auth.models import User

# class for storing attributes of a users score
class Score(models.Model):
    name = models.ForeignKey(User, on_delete=models.CASCADE)
    typing_speed = models.IntegerField(default=0)
    accuracy = models.FloatField(default=0)

    created = models.DateTimeField(auto_now_add=True)
    # allows the scoreboard to display in descending order from the largest to the smallest typing speed
    class Meta:
        ordering = ['-typing_speed']

