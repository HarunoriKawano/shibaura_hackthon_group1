import sys
from statistics import mode
from django.db import models
sys.path.append('../')
from account.models import User

# Create your models here.
class RamenRecord(models.Model):
    category = models.CharField(max_length=10)
    rice = models.BooleanField(null=True,help_text='食べるならTrue')
    amount = models.CharField(max_length=1)
    date = models.DateTimeField(help_text='食事日')
    calorie = models.AutoField(default=0,primary_key=True)
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    def __str__(self):
        return self.date + self.category