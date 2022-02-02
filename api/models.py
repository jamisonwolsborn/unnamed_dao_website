from django.db import models

# Create your models here.
class Blog(models.Model):
  author = models.CharField(max_length = 20)
  title = models.CharField(max_length = 120)
  created_at = models.DateTimeField(auto_now_add=True)
  content = models.TextField()