from django.contrib import admin
from django.urls import path, include
from . views import AuthView

urlpatterns = [
    path('getregister', AuthView.as_view(), name='getregister'),
    path('register', AuthView.as_view(), name='register'),


]
