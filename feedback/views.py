from rest_framework.permissions import AllowAny, BasePermission, SAFE_METHODS
from rest_framework.response import Response
from rest_framework import status, views, viewsets

from django.shortcuts import render
from django.contrib.auth.models import User

from .models import Feedback
from .serializers import FeedbackSerializer


class IsAuthenticatedOrWriteOnly(BasePermission):
    def has_permission(self, request, view):
        return (
            request.method == 'POST' or
            request.user and
            request.user.is_authenticated
        )


class FeedbackViewSet(viewsets.ModelViewSet):
    # Used for get and delete
    permission_classes = [IsAuthenticatedOrWriteOnly]
    serializer_class = FeedbackSerializer
    queryset = Feedback.objects.all()

    def get_queryset(self):
        return Feedback.objects.filter(recipient=self.request.user)
