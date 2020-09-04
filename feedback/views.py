from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import views
from rest_framework import status

from django.shortcuts import render
from django.contrib.auth.models import User

from .models import Feedback
from .serializers import FeedbackSerializer

class FeedbackList(views.APIView):
    def get(self, request, format=None):
        if request.user.is_anonymous:
            return Response(status=status.HTTP_204_NO_CONTENT)
        feedbacks = request.user.feedbacks.all()
        serializer = FeedbackSerializer(feedbacks, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = FeedbackSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    

