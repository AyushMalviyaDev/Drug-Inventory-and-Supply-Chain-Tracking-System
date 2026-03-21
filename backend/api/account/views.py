from rest_framework.response import Response    
from rest_framework.views import APIView
from rest_framework import status
from django.contrib.auth import authenticate
from account.renderers import UserRenderer
from account.serializers import SendPasswordResetEmailSerializer, UserChangePasswordSerializer, UserRegistrationSerializer, UserLoginSerializer, UserProfileSerializer, UserPasswordResetSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated


# generates token manually for a user
def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

class UserRegistrationView(APIView):
    renderer_classes = [UserRenderer]
    def post(self, request,format=None):
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            tokens = get_tokens_for_user(user)
            return Response({"tokens": tokens, "message": "User registered successfully"}, status=status.HTTP_201_CREATED)    
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
    
class UserLoginView(APIView):
    renderer_classes = [UserRenderer]
    def post(self, request,format=None):
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            email = serializer.validated_data.get('email')  
            password = serializer.validated_data.get('password')
            user = authenticate(request,  email=email, password=password)
            if user is not None:
                tokens =  get_tokens_for_user(user)
                return Response({"tokens": tokens, "message": "User logged in successfully"}, status=status.HTTP_200_OK)  
            else: 
                return Response({"error": {'non_field_errors': ['Invalid email or password']}}, status=status.HTTP_404_NOT_FOUND)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


          
      
class UserProfileView(APIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]
    def get(self, request,format=None):
        user = request.user
        serializer = UserProfileSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)


class UserChangePasswordView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = UserChangePasswordSerializer(data=request.data)

        if serializer.is_valid():
            user = request.user

            password = serializer.validated_data.get('password')
            password2 = serializer.validated_data.get('password2')
            old_password = request.data.get('old_password')

            # ✅ check old password
            if not user.check_password(old_password):
                return Response(
                    {"error": "Old password is incorrect"},
                    status=status.HTTP_400_BAD_REQUEST
                )

            # ✅ check match
            if password != password2:
                return Response(
                    {"error": "Passwords do not match"},
                    status=status.HTTP_400_BAD_REQUEST
                )

            # ✅ THIS WAS MISSING
            user.set_password(password)
            user.save()

            return Response({"message": "Password updated successfully"})

        return Response(serializer.errors, status=400)

class SendPasswordResetEmailView(APIView):
    renderer_classes = [UserRenderer]
    def post(self, request,format=None):
        serializer = SendPasswordResetEmailSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True): 
            email = serializer.validated_data.get('email')
            # Logic for sending password reset email goes here
            
            return Response({"message": "Password reset email sent successfully"}, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserPasswordResetView(APIView):
    renderer_classes = [UserRenderer]
    def post(self, request, uid, token, format=None):
       serializer = UserPasswordResetSerializer(data=request.data, context ={'uid': uid, 'token': token})
       if serializer.is_valid(raise_exception=True):
              # Logic for resetting the password goes here

              return Response({"message": "Password reset successfully"}, status=status.HTTP_200_OK)
       return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)