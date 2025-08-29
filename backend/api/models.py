from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(blank=True, null=True)   # not unique
    phone = models.CharField(max_length=15, blank=True, null=True)
    password = models.CharField(max_length=100)
    address = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

class Goal(models.Model):
    skill = models.CharField(max_length=100)
    resource = models.CharField(max_length=50)
    platform = models.CharField(max_length=100)
    status = models.CharField(max_length=20)

    def __str__(self):
        return self.skill