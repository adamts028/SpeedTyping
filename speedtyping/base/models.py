from django.db import models
from django.contrib.auth.models import User

class Score(models.Model):
    name = models.ForeignKey(User, on_delete=models.CASCADE)
    typing_speed = models.IntegerField(default=0)
    accuracy = models.FloatField(default=0)

    class Meta:
        ordering = ['-typing_speed']

