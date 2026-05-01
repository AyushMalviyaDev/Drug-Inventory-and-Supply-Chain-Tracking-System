from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser



#creating custom user manager
class UserManager(BaseUserManager):
  def create_user(self, email, name, tc, role, password=None):
    if not email:
        raise ValueError('User must have an email address')

    user = self.model(
        email=self.normalize_email(email),
        name=name,
        tc=tc,
        role=role,
    )

    user.set_password(password)
    user.save(using=self._db)
    return user

  def create_superuser(self, email, name, tc, role='manufacturer', password=None):
    user = self.create_user(
        email=email,
        name=name,
        tc=tc,
        role=role,
        password=password,
    )
    user.is_admin = True
    user.save(using=self._db)
    return user

#creating custom user model
class User(AbstractBaseUser):

    ROLE_CHOICES = (
        ('manufacturer', 'Manufacturer'),
        ('distributor', 'Distributor'),
        ('transporter', 'Transporter'),
        ('pharmacist', 'Pharmacist'),
    )

    email = models.EmailField(
        verbose_name="Email",
        max_length=255,
        unique=True,
    )
    name = models.CharField(max_length=255)
    tc = models.BooleanField(verbose_name="Terms and Conditions")

    role = models.CharField(max_length=20, choices=ROLE_CHOICES)

    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    email_otp = models.CharField(max_length=6, null=True, blank=True)
    otp_created_at = models.DateTimeField(null=True, blank=True)
    is_verified = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["name", "tc", "role"]

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return self.is_admin

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_admin
