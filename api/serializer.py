from rest_framework import serializers
from .models import *


class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = ('id', 'name')


class LeagueSerializer(serializers.ModelSerializer):
    class Meta:
        model = League
        fields = ('id', 'name')


class CharacteristicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Characteristic
        fields = ('id', 'name')


class CrickeTeamSerializer(serializers.ModelSerializer):
    league_details = LeagueSerializer(source='league', read_only=True)
    city_details = CitySerializer(source='city', read_only=True)
    characteristics_name = serializers.SerializerMethodField()
    class Meta:
        model = CricketTeam
        fields = "__all__"

    def get_characteristics_name(self, obj):
        return [char.name for char in obj.characteristics.all()]
