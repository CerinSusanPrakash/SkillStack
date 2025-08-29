from django.urls import path,include
from .views import UserRegistrationView, GoalListCreateView, GoalRetrieveUpdateDestroyView
from .views import LoginView

urlpatterns = [
    path('adduser/', UserRegistrationView.as_view(), name='adduser'),
    path('login/', LoginView.as_view(), name='login'),
    path('goals/', GoalListCreateView.as_view(), name='goal-list-create'),
    path('goals/<int:pk>/', GoalRetrieveUpdateDestroyView.as_view(), name='goal-detail'),
]