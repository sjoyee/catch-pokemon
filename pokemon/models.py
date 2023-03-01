from django.db import models

CHAR_LENGTH = 255
# Create your models here.


class Pokemon(models.Model):
    name = models.CharField(max_length=CHAR_LENGTH, null=False)
    hp = models.IntegerField(null=False)
    attack = models.IntegerField(null=False)
    defense = models.IntegerField(null=False)
    type = models.CharField(max_length=CHAR_LENGTH, null=False)

    def __str__(self):
        return self.name
