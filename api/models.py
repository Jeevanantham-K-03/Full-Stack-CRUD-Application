from django.db import models

# Create your models here.

class City(models.Model):
    name = models.CharField(unique=True,max_length=100)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
    
class League(models.Model):
    name = models.CharField(unique=True,max_length=100)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
    
class Characteristic(models.Model):
    name = models.CharField(unique=True,max_length=100)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
    
class CricketTeam(models.Model):
    name = models.CharField(unique=True,max_length=100)
    description = models.CharField(max_length=1000)
    ground = models.CharField(unique=True,max_length=100)
    area = models.CharField(max_length=100, null=True, blank=True)
    city = models.ForeignKey(City,on_delete=models.CASCADE)
    league = models.ForeignKey(League,on_delete=models.CASCADE)
    characteristics = models.ManyToManyField(Characteristic)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name