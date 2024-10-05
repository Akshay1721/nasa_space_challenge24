from rest_framework import viewsets
# from .models import SDGGroup, StudentProgress, Quiz
# from .serializers import SDGGroupSerializer, StudentProgressSerializer, QuizSerializer
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt  # Allows POST requests from the frontend without CSRF tokens during development
def register_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)  # Parse JSON data from React
        form = UserCreationForm(data)
        if form.is_valid():
            form.save()
            return JsonResponse({'success': True, 'message': 'Registration successful'}, status=201)
        else:
            return JsonResponse({'success': False, 'errors': form.errors}, status=400)

# Login View (API endpoint)
@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        form = AuthenticationForm(request, data=data)
        if form.is_valid():
            user = form.get_user()
            login(request, user)  # Log the user in
            return JsonResponse({'success': True, 'message': 'Login successful'}, status=200)
        else:
            return JsonResponse({'success': False, 'errors': form.errors}, status=400)