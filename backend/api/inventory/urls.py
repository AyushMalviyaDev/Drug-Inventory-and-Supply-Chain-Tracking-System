from django.urls import path
from .views import CreateDrugView

urlpatterns = [
    path('create-drug/', CreateDrugView.as_view(), name='create-drug'),
]