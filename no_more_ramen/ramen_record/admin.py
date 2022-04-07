from django.contrib import admin
from .models import RamenRecord
# Register your models here.
@admin.register(RamenRecord)
class RamenRecordAdmin(admin.ModelAdmin):
    pass