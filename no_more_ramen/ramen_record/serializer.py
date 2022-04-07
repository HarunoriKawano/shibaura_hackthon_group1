from rest_framework import serializers
from .models import RamenRecord

class RamenRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model =RamenRecord
        fields = ('category','rice','amount','date','user')