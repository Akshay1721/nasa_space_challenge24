from rest_framework import viewsets
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json  # Importing json

@csrf_exempt
def register_view(request):
    if request.method == 'POST':
        try:
            # Parse JSON data from request body
            data = json.loads(request.body)

            # Use UserCreationForm for validation and saving the user
            form = UserCreationForm(data)
            if form.is_valid():
                form.save()
                return JsonResponse({'success': True, 'message': 'Registration successful'}, status=201)
            else:
                # If form is invalid, return the form errors
                return JsonResponse({'success': False, 'errors': form.errors}, status=400)
        except Exception as e:
            # Handle any other unexpected errors
            return JsonResponse({'success': False, 'message': str(e)}, status=500)
    else:
        # Return a response for invalid HTTP methods (GET, PUT, etc.)
        return JsonResponse({'success': False, 'message': 'Invalid request method. Use POST instead.'}, status=405)

@csrf_exempt

def login_view(request):
    if request.method == 'POST':
        try:
            # Parse the JSON body of the request
            data = json.loads(request.body)
            email = data.get('email')
            password = data.get('password')

            # Check if a user exists with the given email
            try:
                user = User.objects.get(email=email)
            except User.DoesNotExist:
                return JsonResponse({'success': False, 'message': 'No user with this email found'}, status=401)
            
            # Authenticate using the username tied to this email
            user = authenticate(request, username=user.username, password=password)

            if user is not None:
                login(request, user)
                return JsonResponse({'success': True, 'message': 'Login successful'})
            else:
                return JsonResponse({'success': False, 'message': 'Invalid credentials'}, status=401)
        
        except json.JSONDecodeError:
            return JsonResponse({'success': False, 'message': 'Invalid JSON format'}, status=400)
        
        except Exception as e:
            return JsonResponse({'success': False, 'message': str(e)}, status=500)
    
    return JsonResponse({'success': False, 'message': 'Invalid request method. Use POST instead.'}, status=405)
