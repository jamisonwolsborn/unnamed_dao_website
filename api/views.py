from django.shortcuts import render
from rest_framework import generics
from .serializers import BlogSerializer
from .models import Blog

class BlogViewPost(generics.CreateAPIView):
  queryset = Blog.objects.all()
  serializer_class = BlogSerializer

class BlogViewGet(generics.ListAPIView):
  queryset = Blog.objects.all()
  serializer_class = BlogSerializer

