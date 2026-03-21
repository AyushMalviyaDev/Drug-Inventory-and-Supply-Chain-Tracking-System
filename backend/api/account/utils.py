from django.core.mail import EmailMessage
import os 
import random
from django.core.mail import send_mail
from django.conf import settings

def generate_otp():
    return str(random.randint(100000, 999999))

def send_otp(email, otp):
    subject = "Verify Your Email"
    body = f"""
    <html>
    <body style="font-family: Arial, sans-serif; line-height: 1.6;">
        <div style="max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <h2 style="color: #22C55E;">Verify Your Email</h2>
        <p>Hello,</p>
        <p>Thank you for registering in PharmaLink. Please use the OTP below to verify your email address:</p>
        <p style="font-size: 24px; font-weight: bold; color: #111827; text-align: center;">{otp}</p>
        <p>This OTP will expire in 5 minutes.</p>
        <p style="margin-top: 20px; font-size: 12px; color: #6B7280;">If you did not request this, please ignore this email.</p>
        </div>
    </body>
    </html>
    """
    email_message = EmailMessage(subject, body, settings.EMAIL_HOST_USER, [email])
    email_message.content_subtype = "html"  # important for HTML emails
    email_message.send()

class Util:
    @staticmethod
    def send_email(data):
        email = EmailMessage(
            subject = data['subject'],
            body = data['body'],
            from_email = os.environ.get('EMAIL_HOST_USER'),
            to = [data['to_email']]
        )
        email.send()