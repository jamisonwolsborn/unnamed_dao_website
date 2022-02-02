from django.urls import path
from .views import BlogViewPost, BlogViewGet

urlpatterns = [
    path('post', BlogViewPost.as_view()),
    path('get', BlogViewGet.as_view())
]