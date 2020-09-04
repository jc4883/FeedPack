from django.urls import path
from . import views

urlpatterns = [
    path('api/feedbacks', views.FeedbackList.as_view()),
]