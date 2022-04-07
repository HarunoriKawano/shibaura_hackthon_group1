from urllib import response
from django.shortcuts import render
from rest_framework import viewsets,filters

from .models import RamenRecord
from .serializer import RamenRecordSerializer
# Create your views here.

class RamenRecordViewSet(viewsets.ModelViewSet):
    queryset = RamenRecord.objects.filter(user.)
    serializer_class = RamenRecordSerializer
    def get_parameters(self,request):
        return response
    def create_data(self,request):
        ramencategory = request.GET.get(category)
    def get_carender(self,request):
        
