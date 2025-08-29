from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import User
from .serializers import UserSerializer

class UserRegistrationView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"message": "User registered successfully!", "data": serializer.data},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors)

# api/views.py
from rest_framework import generics
from .models import Goal
from .serializers import GoalSerializer

class GoalListCreateView(generics.ListCreateAPIView):
    queryset = Goal.objects.order_by('-id')
    serializer_class = GoalSerializer

class GoalRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Goal.objects.all()
    serializer_class = GoalSerializer


from django.contrib.auth import get_user_model
User = get_user_model()

class LoginView(APIView):
    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")

        if not email or not password:
            return Response({"message": "Email and password are required"})

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({"message": "Invalid email"})

        if user.check_password(password):
            return Response({"message": "Login successful"})
        else:
            return Response({"message": "Invalid password"})