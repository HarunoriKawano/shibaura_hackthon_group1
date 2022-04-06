from statistics import mode
from django.db import models

# Create your models here.
class Ramen(models.Model):
    category = models.CharField(max_length=10)
    rice = models.BooleanField(null=True,help_text='食べるならTrue')
    amount = models.CharField(max_length=1)
    date = models.DateTimeField(help_text='食事日')
