from django.contrib import admin
from .models import Ramen
# Register your models here.
@admin.register(Ramen)
class RamenAdmin(admin.ModelAdmin):
    pass