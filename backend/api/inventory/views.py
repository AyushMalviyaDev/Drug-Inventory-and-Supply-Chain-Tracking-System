# inventory/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Drug
from .serializers import DrugSerializer
from .permissions import IsManufacturer

class CreateDrugView(APIView):
    permission_classes = [IsManufacturer]

    def post(self, request):
        serializer = DrugSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save(
                user=request.user,
                manufacturer=request.user
            )
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)