# inventory/views.py
from rest_framework import viewsets, permissions
from .models import Drug, Category
from .serializers import DrugSerializer, CategorySerializer

class CategoryViewSet(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Category.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class DrugViewSet(viewsets.ModelViewSet):
    serializer_class = DrugSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Drug.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)