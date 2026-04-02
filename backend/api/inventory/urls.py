# inventory/urls.py
from rest_framework.routers import DefaultRouter
from .views import DrugViewSet, CategoryViewSet

router = DefaultRouter()
router.register(r'drugs', DrugViewSet, basename='drug')
router.register(r'categories', CategoryViewSet, basename='category')

urlpatterns = router.urls