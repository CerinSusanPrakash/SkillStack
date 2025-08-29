from rest_framework import serializers
from .models import User
from .models import Goal

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

# class GoalSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Goal
#         fields = '__all__'

class GoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Goal
        fields = '__all__'