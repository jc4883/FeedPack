from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Feedback(models.Model):
    title = models.CharField(max_length=100, default="")
    name = models.CharField(max_length=100, null=True)
    email = models.EmailField(null=True)
    comments = models.TextField(max_length=500, null=True)
    num_stars = models.IntegerField()
    recipient = models.ForeignKey(User, related_name="feedbacks", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)