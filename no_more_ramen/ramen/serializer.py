from rest_framework import serializers
from .models import Ramen

class RamenSerializer(serializers.ModelSerializer):
    class Meta:
        model =Ramen
        fields = ('category','rice','amount','date','user')