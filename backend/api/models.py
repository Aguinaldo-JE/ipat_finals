from django.db import models


class Item(models.Model):
        firstName = models.CharField(max_length=100, default="")
        middleName = models.CharField(max_length=100, default="")
        lastName = models.CharField(max_length=100, default="")
        phone = models.CharField(max_length=100, default="")
        email = models.EmailField(max_length=100, default="")
        dateOfBirth = models.CharField(max_length=100, default="")
        placeOfBirth = models.CharField(max_length=100, default="")
        sex = models.CharField(max_length=100, default="")
        civilStatus = models.CharField(max_length=100, default="")
        height = models.CharField(max_length=100, default="")
        weight = models.CharField(max_length=100, default="")
        bloodType = models.CharField(max_length=100, default="")
        citizenship = models.CharField(max_length=100, default="")
        residentialAddress = models.TextField(max_length=100, default="")
        zipCode = models.CharField(max_length=100, default="")
        gsisIdNo = models.CharField(max_length=100, default="")
        pagibigIdNo = models.CharField(max_length=100, default="")
        philhealthNo = models.CharField(max_length=100, default="")
        sssNo = models.CharField(max_length=100, default="")
        tinNo = models.CharField(max_length=100, default="")
        fathersName = models.CharField(max_length=100, default="")
        mothersName = models.CharField(max_length=100, default="")

        def __str__(self):
            return self.firstName