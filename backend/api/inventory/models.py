# inventory/models.py
from django.db import models
from django.conf import settings   


class Category(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="categories"
    )

    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
class Drug(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="drugs"
    )

    category = models.ForeignKey(
        Category,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="drugs"
    )

    name = models.CharField(max_length=255)
    manufacturer = models.CharField(max_length=255)
    batch_number = models.CharField(max_length=100, unique=True)

    quantity = models.IntegerField()
    price = models.FloatField()

    expiry_date = models.DateField()
    manufacture_date = models.DateField()

    created_at = models.DateTimeField(auto_now_add=True)