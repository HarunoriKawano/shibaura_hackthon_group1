from django.shortcuts import render
from rest_framework import viewsets,filters

from .models import RamenRecord
from .serializer import RamenRecordSerializer
# Create your views here.

class RamenRecordViewSet(viewsets.ModelViewSet):
    queryset = RamenRecord.objects.all()
    serializer_class = RamenRecordSerializer
    def get_parameters(self,request):
    def create_data(self,request):
    def get_carender(self,request):
        
