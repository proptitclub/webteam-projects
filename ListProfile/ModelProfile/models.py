from django.db import models

# Create your models here.

class Profile(models.Model):
    name = models.CharField(max_length=200)
    favorite = models.TextField()
    email = models.EmailField()
    avt = models.ImageField(default='./avtDefault.jpg')
    urlFace = models.URLField()

    def __str__(self):
        return self.name

