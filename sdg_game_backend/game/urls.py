from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SDGGroupViewSet, StudentProgressViewSet, QuizViewSet

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'sdg_groups', SDGGroupViewSet)
router.register(r'student_progress', StudentProgressViewSet)
router.register(r'quizzes', QuizViewSet)

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('api/', include(router.urls)),
]