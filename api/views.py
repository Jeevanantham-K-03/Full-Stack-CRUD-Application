from django.shortcuts import render
from rest_framework import viewsets,permissions
from .serializer import *
from .models import *
from rest_framework.views import APIView
from rest_framework.response import Response

class CityViewSet(viewsets.ViewSet):
    permission_classes=[permissions.AllowAny]
    queryset = City.objects.all()
    serializers_classes= CitySerializer

    def list(self,request):
        queryset = City.objects.all()
        serializer = self.serializers_classes(queryset,many=True)
        return Response(serializer.data)
    
class LeagueViewSet(viewsets.ViewSet):
    permission_classes=[permissions.AllowAny]
    queryset = League.objects.all()
    serializers_classes= LeagueSerializer

    def list(self,request):
        queryset = League.objects.all()
        serializer = self.serializers_classes(queryset,many=True)
        return Response(serializer.data)
    
class CharacteristicViewSet(viewsets.ViewSet):
    permission_classes=[permissions.AllowAny]
    queryset = Characteristic.objects.all()
    serializers_classes= CharacteristicSerializer

    def list(self,request):
        queryset = Characteristic.objects.all()
        serializer = self.serializers_classes(queryset,many=True)
        return Response(serializer.data)
    
class CricketTeamViewSet(viewsets.ViewSet):
    permission_classes=[permissions.AllowAny]
    queryset = CricketTeam.objects.all()
    serializers_classes= CrickeTeamSerializer

    def list(self,request):
        queryset = CricketTeam.objects.all()
        serializer = self.serializers_classes(queryset,many=True)
        return Response(serializer.data)

    def create(self,request):
        serializer = self.serializers_classes(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response (serializer.data)
        else:
            return Response (serializer.errors, status=400)
    
    def retrieve(self,request,pk=None):
        queryset = self.queryset.get(pk=pk)
        serializer = self.serializers_classes(queryset)
        return Response(serializer.data)
    
    def update(self,request,pk=None):
        queryset = self.queryset.get(pk=pk)
        serializer = self.serializers_classes(queryset,data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response (serializer.data)
        else:
            return Response (serializer.errors, status=400)
        
    def destroy(self, request, pk=None):
        queryset = self.queryset.get(pk=pk)
        queryset.delete()
        return Response(status=204)