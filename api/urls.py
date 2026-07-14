from django.contrib import admin
from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register('city',CityViewSet,basename='city')
router.register('league',LeagueViewSet,basename='league')
router.register('characteristic',CharacteristicViewSet,basename='characteristic')
router.register('cricketteam',CricketTeamViewSet,basename='cricketteam')

urlpatterns =  router.urls