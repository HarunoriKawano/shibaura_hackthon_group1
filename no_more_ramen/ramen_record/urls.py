from django.db import router
from django.urls import path
from rest_framework import routers
from .views import RamenRecordViewSet

app_name = 'ramen_record'
urlpatterns = [
    path('ramen_record/',RamenRecordViewSet)
]

# router = routers.DefaultRouter()
# router.register('ramen_record/',RamenRecordViewSet)