from rest_framework import serializers
from .models import Feedback


class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = ('title', 'name', 'email', 'comments',
                  'num_stars', 'recipient', 'created_at')
