from django.shortcuts import render
from rest_framework.views import APIView
from apps.core.models import AuthUser
from django.http import HttpResponse

# Create your views here.

class AuthView(APIView):
    def get(self, request):
        print("Function called")
        return render(request, 'account/register.html')

    def post(self, request):
       self.registerView(request)

    def registerView(self, request):
        print(request.POST)

  