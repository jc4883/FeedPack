from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Feedback(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    comments = models.CharField(max_length=500)
    num_stars = models.IntegerField()
    recipient = models.ForeignKey(User, related_name="feedbacks", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return " ".join([str(self.pk), self.name, self.email, self.comments])

